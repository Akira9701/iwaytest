export interface ITrip {
  order_id: number
  user_id: number
  order_type: number
  transaction: number
  date: string
  date_arrival: string
  date_departure: string
  payable_status: number
  status: number
  service_id: number
  duration: number
  doer_city_id: number
  allowable_time: number
  cancellation_time: number
  reward: number
  booker_number: string
  arrival_number: string
  departure_number: string
  table: string
  notes: string
  location_address: string
  destination_address: string
  lang: string
  coef_subaddress: number
  subaddress: Subaddress[]
  address: string
  geo_check: boolean
  geo_data: GeoData
  passengers: Passenger[]
  passengers_number: number
  cancellation_time_without_penalty: string
  destination_address_object: DestinationAddressObject
  location_address_object: LocationAddressObject
  car_data: CarData
  driver_data: DriverData
  currency: string
  price: Price
  start_place: StartPlace
  finish_place: FinishPlace
  additional_change_itinerary: number
  additional_wait: number
  additional_address: boolean
  fare_on_toll_road: number
  send_params: SendParams[]
  allowable_subaddress: number
  minimum_duration: number
  additional_payment_info: number
  internal_number: number
  customer: Customer
  coordinator: Coordinator
  page: number
  items_on_page: number
  total_items: number
  page_count: number
  viewers: string[]
  additional_services: AdditionalService[]
  is_blocked_update: boolean
  date_change: boolean
  is_fast_booking: boolean
}

interface Subaddress {
  address: string
  geo_check: boolean
  geo_data: GeoData
}

interface GeoData {
  // Add properties for GeoData here
}

interface Passenger {
  name: string
  email: string
  phone: string
  company: string
  client_id: number
  company_id: number
}

interface DestinationAddressObject {
  address: string
  geo_check: boolean
  geo_data: GeoData
}

interface LocationAddressObject {
  address: string
  geo_check: boolean
  geo_data: GeoData
}

interface CarData {
  car_class_id: number
  car_class: string
  models: string
  capacity: number
}

interface DriverData {
  driver_name: string
  driver_phone: string
  driver_car: string
}

interface Price {
  price_id: number
  price: number
  price_subaddress: number
}

interface StartPlace {
  place_id: number
  title: string
  type: number
  type_title: string
  city_id: number
  city: string
}

interface FinishPlace {
  place_id: number
  title: string
  type: number
  type_title: string
  city_id: number
  city: string
}

interface SendParams {
  send_client_voucher: boolean
  send_admin_voucher: boolean
  send_client_doc: boolean
  send_admin_doc: boolean
}

interface Customer {
  name: string
  email: string
  phone: string
}

interface Coordinator {
  phone: string
  name: string
}

interface AdditionalService {
  id: number
  additional_service_id: number
  name: string
  uid: string
  uid_additional_service: string
  price: number
  category: string
  coefficient: number
  type: string
  flexible_tariff: boolean
  uuid: string
}
