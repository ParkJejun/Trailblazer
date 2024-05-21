import { createPublicClient, http, publicActions } from "viem";
import { klaytnBaobab } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { PRIVATE_KEY, CONTRACT } from "@env";

export const useWeb3 = () => {
  const account = useMemo(() => {
    return privateKeyToAccount(PRIVATE_KEY);
  }, []);

  const walletClient = useMemo(() => {
    return createPublicClient({
      account,
      chain: klaytnBaobab,
      transport: http("https://klaytn-baobab-rpc.allthatnode.com:8551"),
    }).extend(publicActions);
  }, []);

  const addPlace = useCallback(
    async (name, englishName, buildingNum, latitude, longitude, tags) => {
      const { request } = await walletClient.simulateContract({
        account,
        address: CONTRACT,
        abi: abi,
        functionName: "addPlace",
        value: parseEther("0.1"),
        params: [name, englishName, buildingNum, latitude, longitude, tags],
      });
      await walletClient.writeContract(request);
    },
    []
  );

  const deletePlace = useCallback(async (id) => {
    const { request } = await walletClient.simulateContract({
      account,
      address: CONTRACT,
      abi: abi,
      functionName: "addPlace",
      value: parseEther("0.1"),
      params: [id],
    });
    await walletClient.writeContract(request);
  }, []);

  const updatePlace = useCallback(
    async (id, name, englishName, buildingNum, latitude, longitude, tags) => {
      const { request } = await walletClient.simulateContract({
        account,
        address: CONTRACT,
        abi: abi,
        functionName: "addPlace",
        value: parseEther("0.1"),
        params: [id, name, englishName, buildingNum, latitude, longitude, tags],
      });
      await walletClient.writeContract(request);
    },
    []
  );

  const getAllPlaces = useCallback(async () => {
    return await walletClient.readContract({
      address: CONTRACT,
      abi: abi,
      functionName: "getAllPlaces",
    });
  }, []);

  return { addPlace, deletePlace, updatePlace, getAllPlaces };
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
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPlace",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
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
