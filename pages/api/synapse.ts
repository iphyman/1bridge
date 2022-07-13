import { NextApiHandler } from "next";
import axios from "axios";

const handler: NextApiHandler = async (req, res) => {
  const chainId = req.query.chainId as string;

  const response = await axios.get(
    `https://syn-api-x.herokuapp.com/v1/get_bridgeable_tokens?chain=${chainId}`
  );

  res.status(200).send(response.data);
};

export default handler;
