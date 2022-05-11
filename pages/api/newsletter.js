import axios from "axios";

function getRequestParams(email) {
  // mailchimp datacenter - mailchimp api keys always look like this:
  // fe4f064432e4684878063s83121e4971-us6

  const url = `https://${process.env.MAILCHIMP_DATACENTER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`;

  // Add aditional params here. See full list of available params:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: "subscribed",
  };

  // Api key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(
    `anystring:${process.env.MAILCHIMP_API_KEY}`
  ).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    //return everything i'm sending
    url,
    data,
    headers,
  };
}

export default async (req, res) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await axios.post(url, data, { headers });

    // Success
    // Website you wish to allow to connect
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://www.marcovavassori.com/"
    );

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong... Send me an email at marcovavassori.mv@gmail.com and I'll add you to the list.`,
    });

    // Report error to Sentry or whatever
  }
};
