# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@offer = Offer.create(title: "Primera oferta", description: "Descripción de la primera oferta", price: 20, location: "Cerca de casa", count: 20, discount: 10, timeAvailable: "14:00 - 16:00")
Offer.create(title: "Segunda oferta", description: "Descripción de la segunda oferta", price: 20, location: "Centro vialia", count: 20, discount: 10, timeAvailable: "14:00 - 16:00")
Offer.create(title: "Tercera oferta", description: "Descripción de la tercera oferta", price: 20, location: "Calle Larios", count: 20, discount: 10, timeAvailable: "14:00 - 16:00")
Offer.create(title: "Cuarta oferta", description: "Descripción de la cuarta oferta", price: 20, location: "PTA", count: 20, discount: 10, timeAvailable: "14:00 - 16:00")
Offer.create(title: "Quinta oferta", description: "Descripción de la quinta oferta", price: 20, location: "Lejos de casa", count: 20, discount: 10, timeAvailable: "14:00 - 16:00")

@user = User.create(name:"jesus", email:"jesus@cleverppc.com", password: "password")