const buscaInfoCepRepository = (axios) => async (params) => {
  try {
    const response = await axios.get(`/${params.format}/${params.cep}`)

    return response?.data ?? {}
  } catch (error) {
    if(error.response.status === 404 || error.response.status === 400)  {
      throw error.response.data.message
    }
    throw error
  }
}

export { buscaInfoCepRepository }