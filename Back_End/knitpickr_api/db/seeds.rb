# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Making our Materials
User.destroy_all
Material.destroy_all
Project.destroy_all

# Making our Users
audrey = User.create(name: 'Audrey')
emily = User.create(name: 'Emily')
kevin = User.create(name: 'Kevin')
nikki = User.create(name: 'Nikki')

# Need to associate materials and projects with Users!


# Making our materials
material1 = Material.create(name: 'yarn', quantity: 8, color: 'red', brand:'Red Heart Yarn', favorited: false, user_id: 2)
material2 = Material.create(name: 'yarn', quantity: 4, color: 'mint', brand:'Lily Sugar n Cream', favorited: true, user_id: 1)

material3 = Material.create(name: 'hook', quantity: 1, color: 'silver - size J', brand:'Susan Bates Silvalume', favorited: false, user_id: 2)
material4 = Material.create(name: 'hook', quantity: 1, color: 'wood - size H', brand:'ChiaoGoo', favorited: true, user_id: 1)

material5 = Material.create(name: 'yarn', quantity: 5, color: 'gray', brand:'Lux Adorna', favorited: true, user_id: 2)
material6 = Material.create(name: 'yarn', quantity: 3, color: 'purple', brand:"Bernat's Blanket Yarn", favorited: false, user_id: 3)
material7 = Material.create(name: 'yarn', quantity: 9, color: 'pink', brand:'Simply Soft', favorited: false, user_id: 4)
material8 = Material.create(name: 'yarn', quantity: 4, color: 'green', brand:"Caron's Cakes", favorited: true, user_id: 3)
material9 = Material.create(name: 'yarn', quantity: 11, color: 'yellow', brand:'Koigu', favorited: true, user_id: 2)
material10 = Material.create(name: 'yarn', quantity: 2, color: 'black', brand:'Paintbox', favorited: false, user_id: 3)
material11 = Material.create(name: 'yarn', quantity: 6, color: 'orange', brand:'ChiaoGoo', favorited: false, user_id: 4)

# Making our Projects -- and giving each to a user.
project1 = Project.create(name: 'Christmas Stocking', favorited: false,  user_id: 2)
project2 = Project.create(name: 'Spring Wreath', favorited: true, user_id: 1)
project3 = Project.create(name: 'Deer Lovie', favorited: false, user_id: 3)
project4 = Project.create(name: 'Baby Blanket', favorited: false, user_id: 3)
project5 = Project.create(name: 'Accent Pillowcase', favorited: false, user_id: 4)
project6 = Project.create(name: 'Dress', favorited: true, user_id: 4)
project7 = Project.create(name: 'Fall Scarf', favorited: false, user_id: 4)
project8 = Project.create(name: 'Pumpkin Amigurumi', favorited: true, user_id: 2)
project9 = Project.create(name: 'Squid Amigurumi', favorited: true, user_id: 1)
project10 = Project.create(name: 'Coral Installation', favorited: true, user_id: 1)

# Users have a favorited_projects array
audrey.fav_projects << project9
audrey.fav_projects << project2

# Users have favorite materials
audrey.fav_materials << material2
audrey.fav_materials << material4