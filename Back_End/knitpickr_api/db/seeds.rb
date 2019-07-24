# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



material1 = Material.create(name: 'yarn', quantity: 8, color: 'red', brand:'Red Heart Yarn', favorited: false)
material2 = Material.create(name: 'yarn', quantity: 4, color: 'mint', brand:'Lily Sugar n Cream', favorited: true)

material3 = Material.create(name: 'hook', quantity: 1, color: 'silver - size J', brand:'Susan Bates Silvalume', favorited: false)
material4 = Material.create(name: 'hook', quantity: 1, color: 'wood - size H', brand:'ChiaoGoo', favorited: true)

material5 = Material.create(name: 'yarn', quantity: 5, color: 'gray', brand:'Lux Adorna', favorited: true)
material6 = Material.create(name: 'yarn', quantity: 3, color: 'purple', brand:"Bernat's Blanket Yarn", favorited: false)
material7 = Material.create(name: 'yarn', quantity: 9, color: 'pink', brand:'Simply Soft', favorited: false)
material8 = Material.create(name: 'yarn', quantity: 4, color: 'green', brand:"Caron's Cakes", favorited: true)
material9 = Material.create(name: 'yarn', quantity: 11, color: 'yellow', brand:'Koigu', favorited: true)
material10 = Material.create(name: 'yarn', quantity: 2, color: 'black', brand:'Paintbox', favorited: false)
material11 = Material.create(name: 'yarn', quantity: 6, color: 'orange', brand:'ChiaoGoo', favorited: false)


project1 = Project.create(name: 'Christmas Stocking', favorited: false)
project2 = Project.create(name: 'Spring Wreath', favorited: true)
project3 = Project.create(name: 'Deer Lovie', favorited: false)
project4 = Project.create(name: 'Baby Blanket', favorited: false)
project5 = Project.create(name: 'Accent Pillowcase', favorited: false)
project6 = Project.create(name: 'Dress', favorited: true)
project7 = Project.create(name: 'Fall Scarf', favorited: false)
project8 = Project.create(name: 'Pumpkin Amigurumi', favorited: true)
project9 = Project.create(name: 'Squid Amigurumi', favorited: true)
project10 = Project.create(name: 'Coral Installation', favorited: true)

project1.materials << material1
project1.materials << material8
project1.materials << material3

project2.materials << material2
project2.materials << material7
project2.materials << material4

project3.materials << material10
project3.materials << material5
project3.materials << material4

project4.materials << material7
project4.materials << material6
project4.materials << material4

project5.materials << material5
project5.materials << material4

project6.materials << material8
project6.materials << material9
project6.materials << material4

project7.materials << material11
project7.materials << material1
project7.materials << material9
project7.materials << material3

project8.materials << material8
project8.materials << material11
project8.materials << material3


project9.materials << material2
project9.materials << material7
project9.materials << material3

project10.materials << material4
project10.materials << material7
project10.materials << material11
