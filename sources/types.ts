export type JSONPrimitive = string | number | boolean | null

export interface JSONObject {
  [key: string]: JSONValue
}

export type JSONArray = Array<JSONValue>

export type JSONValue = JSONPrimitive | JSONObject | JSONArray

export interface IParsingOptions {
  NamingConvention?: ((PropertyName: string) => string) | ((PropertyName: string) => Promise<string>)
}