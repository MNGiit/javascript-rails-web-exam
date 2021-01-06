# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
topic_html = Topic.create(name: "HTML")
topic_css = Topic.create(name: "CSS")
topic_frontend = Topic.create(name: "Front End Web Development")

#q1 = Question.create(stem: "What is 1 + 1?", distractor_answer: "2", distractor_b: "1",
#distractor_c: "3", distractor_d: "4")

question1 = Question.create(
    stem: "",
    distractor_answer: "",
    distractor_b: "",
    distractor_c: "",
    distractor_d: ""
)