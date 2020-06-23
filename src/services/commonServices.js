export const success = (res) => (res.ok ? res.json() : Promise.resolve({}));
export default success;
