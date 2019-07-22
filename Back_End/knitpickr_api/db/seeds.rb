# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Material.create(name: yarn, quantity: 1, color: 'red', brand:'Red Heart Yarn', favorited: false)
Material.create(name: yarn, quantity: 4, color: 'mint', brand:'Lily Sugar n Cream', favorited: true)

Project.create(name: 'Christmas Stocking', favorited: false)
Project.create(name: 'Spring Wreath', favorited: true)