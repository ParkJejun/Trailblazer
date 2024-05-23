import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { ADDRESS, PRIVATE_KEY, CONTRACT } from "@env";
import "react-native-get-random-values";

export const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const Web3 = require("web3");

  const web3 = useMemo(() => {
    return new Web3("https://public-en-baobab.klaytn.net");
  }, []);

  const contract = useMemo(() => {
    return new web3.eth.Contract(abi, CONTRACT);
  }, []);

  const [places, setPlaces] = useState();
  const [count, setCount] = useState(0);

  // timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const addPlace = useCallback(
    async (name, englishName, buildingNum, latitude, longitude, tags) => {
      const tx = contract.methods.addPlace(
        name,
        englishName,
        buildingNum,
        web3.utils.toWei(latitude, "lovelace"),
        web3.utils.toWei(longitude, "lovelace"),
        tags
      );
      const createTransaction = await web3.eth.accounts.signTransaction(
        {
          from: ADDRESS,
          to: CONTRACT,
          data: tx.encodeABI(),
          gas: await tx.estimateGas(),
          maxFeePerGas: 250000000000,
          maxPriorityFeePerGas: 250000000000,
        },
        PRIVATE_KEY
      );
      await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
      setCount((prevCount) => prevCount + 1);
    },
    []
  );

  const deletePlace = useCallback(async (id) => {
    const tx = contract.methods.deletePlace(id);
    const createTransaction = await web3.eth.accounts.signTransaction(
      {
        from: ADDRESS,
        to: CONTRACT,
        data: tx.encodeABI(),
        gas: await tx.estimateGas(),
        maxFeePerGas: 250000000000,
        maxPriorityFeePerGas: 250000000000,
      },
      PRIVATE_KEY
    );
    await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    setCount((prevCount) => prevCount + 1);
  }, []);

  const updatePlace = useCallback(
    async (id, name, englishName, buildingNum, latitude, longitude, tags) => {
      const tx = contract.methods.updatePlace(
        id,
        name,
        englishName,
        buildingNum,
        web3.utils.toWei(latitude, "lovelace"),
        web3.utils.toWei(longitude, "lovelace"),
        tags
      );
      const createTransaction = await web3.eth.accounts.signTransaction(
        {
          from: ADDRESS,
          to: CONTRACT,
          data: tx.encodeABI(),
          gas: await tx.estimateGas(),
          maxFeePerGas: 250000000000,
          maxPriorityFeePerGas: 250000000000,
        },
        PRIVATE_KEY
      );
      await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
      setCount((prevCount) => prevCount + 1);
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await contract.methods.getAllPlaces().call();
      const newPlaces = [];

      for (let i = 0; i < result[0].length; i++) {
        newPlaces.push({
          id: result[0][i],
          name: result[1][i],
          englishName: result[2][i],
          buildingNum: result[3][i],
          latitude: web3.utils.fromWei(result[4][i], "lovelace"),
          longitude: web3.utils.fromWei(result[5][i], "lovelace"),
          tags: result[6][i],
        });
      }
      setPlaces(newPlaces);
    };
    fetchData();
  }, [count]);

  return (
    <Web3Context.Provider
      value={{ places, addPlace, deletePlace, updatePlace }}
    >
      {children}
    </Web3Context.Provider>
  );
};

const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_englishName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_buildingNum",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_latitude",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_longitude",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tags",
        type: "string",
      },
    ],
    name: "addPlace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "deletePlace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPlaces",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "places",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "englishName",
        type: "string",
      },
      {
        internalType: "string",
        name: "buildingNum",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "latitude",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "longitude",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tags",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "placesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_englishName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_buildingNum",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_latitude",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_longitude",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tags",
        type: "string",
      },
    ],
    name: "updatePlace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
