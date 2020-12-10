// eslint-disable-next-line import/prefer-default-export
export async function getFlags(url) {
    try {
        const response = await fetch(`${url}`);
        return await response.json();
    } catch (err) {
        console.error(err);
    }
    // eslint-disable-next-line no-undef
    const data = response.json();
    return data;
}
