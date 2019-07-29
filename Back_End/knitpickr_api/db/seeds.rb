# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Resetting database upon each re-seeding:
# User.destroy_all
# Material.destroy_all
# Project.destroy_all

# Making our Users
audrey = User.create(name: 'Audrey')
emily = User.create(name: 'Emily')
kevin = User.create(name: 'Kevin')
nikki = User.create(name: 'Nikki')

# Users have many projects
# Making our Projects -- and giving each to a user.
project1 = Project.create(name: 'Christmas Stocking',  user_id: 2)
project2 = Project.create(name: 'Spring Wreath', user_id: 1)
project3 = Project.create(name: 'Fall Scarf', user_id: 4)
project4 = Project.create(name: 'Pumpkin Amigurumi', user_id: 2)
project5 = Project.create(name: 'Squid Amigurumi', user_id: 1)
project6 = Project.create(name: 'Coral Installation', user_id: 3)

# Making our materials
material1 = Material.create(name: 'yarn', quantity: 8, color: 'red', brand:'Red Heart Yarn')
material2 = Material.create(name: 'yarn', quantity: 4, color: 'mint', brand:'Lily Sugar n Cream')

material3 = Material.create(name: 'hook', quantity: 1, color: 'silver - size J', brand:'Susan Bates Silvalume')
material4 = Material.create(name: 'hook', quantity: 1, color: 'wood - size H', brand:'ChiaoGoo')

material5 = Material.create(name: 'yarn', quantity: 5, color: 'gray', brand:'Lux Adorna')
material6 = Material.create(name: 'yarn', quantity: 3, color: 'purple', brand:"Bernat's Blanket Yarn")
material7 = Material.create(name: 'yarn', quantity: 9, color: 'pink', brand:'Simply Soft')
material8 = Material.create(name: 'yarn', quantity: 4, color: 'green', brand:"Caron's Cakes")
material9 = Material.create(name: 'yarn', quantity: 11, color: 'yellow', brand:'Koigu')
material10 = Material.create(name: 'yarn', quantity: 2, color: 'black', brand:'Paintbox')
material11 = Material.create(name: 'yarn', quantity: 6, color: 'orange', brand:'ChiaoGoo')

project1.materials << [material1, material2, material3]
project1.save

project2.materials << [material2, material7, material4]
project2.save

project3.materials << [material11, material1, material3]
project3.save

project4.materials << [material11, material8, material3]
project4.save

project5.materials << [material2, material10, material4]
project5.save

project6.materials << [material7, material6, material4]
project6.save