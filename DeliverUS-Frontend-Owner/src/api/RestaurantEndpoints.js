import { get, post } from './helpers/ApiRequestsHelper'
// Crear la función create para enviar el formuñario al backend para crear un restaurante con un POST
function create (data) {
  return post('restaurants', data)
}
function getAll () {
  return get('users/myrestaurants')
}

function getDetail (id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories () {
  return get('restaurantCategories')
}

export { getAll, getDetail, getRestaurantCategories, create }
