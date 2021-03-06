export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }
    console.log();
    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
// })();
