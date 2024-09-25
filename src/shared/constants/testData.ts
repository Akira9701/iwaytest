import { ITrip } from '../types'

function generateTrips(count: number = 20): ITrip[] {
  const firstNames = [
    'John',
    'Jane',
    'Michael',
    'Emily',
    'Chris',
    'Olivia',
    'David',
    'Sophia',
    'Daniel',
    'Emma',
  ]
  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
  ]
  const companies = [
    'TechCorp',
    'GlobeCorp',
    'InnovateX',
    'Alpha Inc',
    'Beta LLC',
  ]
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
  const streets = ['Main St', '1st Ave', 'Park Blvd', 'Ocean Dr', 'Sunset Rd']
  const carModels = [
    'Toyota Prius',
    'Tesla Model S',
    'BMW X5',
    'Audi A4',
    'Ford Mustang',
  ]
  const carClasses = ['Economy', 'Business', 'First Class']
  const languages = ['EN', 'ES', 'FR', 'DE']

  const randomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min
  const randomElement = (arr: string[]) => arr[randomNumber(0, arr.length - 1)]
  const randomDate = () =>
    new Date(Date.now() - randomNumber(0, 31536000000))
      .toISOString()
      .split('T')[0] // в пределах года

  const generateGeoData = () => {
    return {
      // Примерные данные о геолокации, если нужно.
    }
  }

  const generatePassenger = () => {
    return {
      name: `${randomElement(firstNames)} ${randomElement(lastNames)}`,
      email: `${randomElement(firstNames).toLowerCase()}.${randomElement(
        lastNames,
      ).toLowerCase()}@example.com`,
      phone: `+1-${randomNumber(100, 999)}-${randomNumber(
        100,
        999,
      )}-${randomNumber(1000, 9999)}`,
      company: randomElement(companies),
      client_id: randomNumber(1, 100),
      company_id: randomNumber(1, 50),
    }
  }

  const generateTrip = (id: number): ITrip => {
    const startCity = randomElement(cities)
    const destinationCity = randomElement(cities)
    const startStreet = randomElement(streets)
    const destinationStreet = randomElement(streets)

    return {
      order_id: id,
      user_id: randomNumber(1, 100),
      order_type: randomNumber(0, 3),
      transaction: randomNumber(1000, 9999),
      date: randomDate(),
      date_arrival: randomDate(),
      date_departure: randomDate(),
      payable_status: randomNumber(0, 1),
      status: randomNumber(0, 7),
      service_id: randomNumber(1, 10),
      duration: randomNumber(30, 300), // мин
      doer_city_id: randomNumber(1, 50),
      allowable_time: randomNumber(60, 120),
      cancellation_time: randomNumber(10, 60),
      reward: randomNumber(50, 500),
      booker_number: `BK-${randomNumber(1000, 9999)}`,
      arrival_number: `AR-${randomNumber(1000, 9999)}`,
      departure_number: `DP-${randomNumber(1000, 9999)}`,
      table: `Table-${randomNumber(1, 50)}`,
      notes: 'Quick trip with VIP passenger.',
      location_address: `${randomNumber(1, 100)} ${startStreet}, ${startCity}`,
      destination_address: `${randomNumber(
        1,
        100,
      )} ${destinationStreet}, ${destinationCity}`,
      lang: randomElement(languages),
      coef_subaddress: randomNumber(1, 5),
      subaddress: [
        {
          address: `${randomNumber(1, 100)} ${randomElement(streets)}`,
          geo_check: true,
          geo_data: generateGeoData(),
        },
      ],
      address: `${randomNumber(1, 100)} ${randomElement(
        streets,
      )} St, ${randomElement(cities)}`,
      geo_check: true,
      geo_data: generateGeoData(),
      passengers: Array(randomNumber(1, 5))
        .fill(0)
        .map(() => generatePassenger()),
      passengers_number: randomNumber(1, 5),
      cancellation_time_without_penalty: `${randomNumber(10, 60)} mins`,
      destination_address_object: {
        address: `${randomNumber(1, 100)} ${randomElement(streets)}`,
        geo_check: true,
        geo_data: generateGeoData(),
      },
      location_address_object: {
        address: `${randomNumber(1, 100)} ${randomElement(streets)}`,
        geo_check: true,
        geo_data: generateGeoData(),
      },
      car_data: {
        car_class_id: randomNumber(1, 3),
        car_class: randomElement(carClasses),
        models: randomElement(carModels),
        capacity: randomNumber(2, 5),
      },
      driver_data: {
        driver_name: `${randomElement(firstNames)} ${randomElement(lastNames)}`,
        driver_phone: `+1-${randomNumber(100, 999)}-${randomNumber(
          100,
          999,
        )}-${randomNumber(1000, 9999)}`,
        driver_car: randomElement(carModels),
      },
      currency: 'USD',
      price: {
        price_id: randomNumber(1, 100),
        price: randomNumber(100, 1000),
        price_subaddress: randomNumber(5, 50),
      },
      start_place: {
        place_id: randomNumber(1, 50),
        title: `${startCity} Airport`,
        type: randomNumber(1, 5),
        type_title: 'Airport',
        city_id: randomNumber(1, 20),
        city: startCity,
      },
      finish_place: {
        place_id: randomNumber(1, 50),
        title: `${destinationCity} Station`,
        type: randomNumber(1, 5),
        type_title: 'Train Station',
        city_id: randomNumber(1, 20),
        city: destinationCity,
      },
      additional_change_itinerary: randomNumber(0, 1),
      additional_wait: randomNumber(0, 60),
      additional_address: Boolean(randomNumber(0, 1)),
      fare_on_toll_road: randomNumber(0, 50),
      send_params: [
        {
          send_client_voucher: true,
          send_admin_voucher: true,
          send_client_doc: false,
          send_admin_doc: true,
        },
      ],
      allowable_subaddress: randomNumber(1, 5),
      minimum_duration: randomNumber(30, 120),
      additional_payment_info: randomNumber(0, 100),
      internal_number: randomNumber(1000, 9999),
      customer: {
        name: `${randomElement(firstNames)} ${randomElement(lastNames)}`,
        email: `${randomElement(firstNames).toLowerCase()}@client.com`,
        phone: `+1-${randomNumber(100, 999)}-${randomNumber(
          100,
          999,
        )}-${randomNumber(1000, 9999)}`,
      },
      coordinator: {
        phone: `+1-${randomNumber(100, 999)}-${randomNumber(
          100,
          999,
        )}-${randomNumber(1000, 9999)}`,
        name: `${randomElement(firstNames)} ${randomElement(lastNames)}`,
      },
      page: randomNumber(1, 10),
      items_on_page: randomNumber(5, 20),
      total_items: randomNumber(50, 200),
      page_count: randomNumber(1, 20),
      viewers: [randomElement(firstNames), randomElement(firstNames)],
      additional_services: [
        {
          id: randomNumber(1, 100),
          additional_service_id: randomNumber(1, 100),
          name: 'WiFi',
          uid: '12312312312',
          uid_additional_service: '12312312312',
          price: randomNumber(10, 100),
          category: 'Internet',
          coefficient: 1.0,
          type: 'Fixed',
          flexible_tariff: false,
          uuid: '12312312312',
        },
      ],
      is_blocked_update: Boolean(randomNumber(0, 1)),
      date_change: Boolean(randomNumber(0, 1)),
      is_fast_booking: Boolean(randomNumber(0, 1)),
    }
  }

  return Array(count)
    .fill(0)
    .map((_, index) => generateTrip(index + 1))
}
export const testData: ITrip[] = generateTrips(20)
