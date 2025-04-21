import Endpoint from "./Endpoint";

const fetchFromEndpoint = async <Params extends object, Result extends object>(
  endpoint: Endpoint<Params, Result>,
  params: Params,
  method: FetchMethod = "GET"
): Promise<Result[] | Result> => {
  const url = endpoint.mapParamsToUrl(params);
  let response: Response;

  if (method === "GET") {
    response = await fetch(url);
  } else {
    const body = endpoint.mapParamsToBody
      ? endpoint.mapParamsToBody(params)
      : JSON.stringify(params);

    const headers =
      body instanceof FormData
        ? undefined
        : { "Content-Type": "application/json" };

    response = await fetch(url, { method, body, headers });
  }

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();

  if (Array.isArray(json)) {
    return json.map((item: any) => endpoint.mapResponse(item, params));
  }

  return endpoint.mapResponse(json, params);
};
export default fetchFromEndpoint;
export type FetchMethod = "GET" | "POST" | "PUT" | "DELETE";
