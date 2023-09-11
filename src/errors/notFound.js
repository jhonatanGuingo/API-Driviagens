export function notFoundError() {
    console.log('oiii')
    return {
        type: "notFound",
        message: `ID não encontrado!`
    }
}