class BuscaCep {
  constructor({
    cep = "",
    address_type = "",
    address_name = "",
    address = "",
    state = "",
    district = "",
    lat = "",
    lng = "",
    city = "",
    city_ibge = "",
    ddd = "",
  }) {
    this.cep = cep
    this.address_type = address_type
    this.address_name = address_name
    this.address = address
    this.state = state
    this.district = district
    this.lat = lat
    this.lng = lng
    this.city = city
    this.city_ibge = city_ibge
    this.ddd = ddd
  }
}

export { BuscaCep }