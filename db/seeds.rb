# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Location.create!([
    {
      id: 1,
      name: "Downtown Studio",
      street: "Main St",
      city: "Winslow"
    },
    {
      id: 2,
      name: "Uptown Studio",
      street: "Ellington Ln",
      city: "Ellington"
    },
    {
      id: 3,
      name: "Southside Studio",
      street: "Baker St",
      city: "Valleytown"
    },
    {
      id: 4,
      name: "Midtown Studio",
      street: "Inca St",
      city: "Monterey"
    }
  ])

Teacher.create!([
    {
      name: "Katie Marks",
      email: "katie@example.com",
      bio: "I love yoga"
    },
    {
      name: "Chris Daniels",
      email: "chris@example.com",
      bio: "Working out and yoga is pretty much all I do"
    },
    {
      name: "Adam Alexander",
      email: "adam@example.com",
      bio: "I do yoga for fun and run marathons"
    },
    {
      name: "Nina Jones",
      email: "nina@example.com",
      bio: "I was born to teach yoga"
    }
  ])
