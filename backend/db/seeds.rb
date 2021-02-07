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
topic_simple_math = Topic.create(name: "Simple Math")

#q1 = Question.create(stem: "What is 1 + 1?", distractor_answer: "2", distractor_b: "1",
#distractor_c: "3", distractor_d: "4")

mathquestion_1 = Question.create(
    stem: "What is 1 + 1?", # What is 1+1?
    distractor_answer: "2", # 1+1 is 2
    distractor_b: "3", # 1+1 is 3
    distractor_c: "1", # 1+1 is 1
    distractor_d: "0"  # 1+1 is 0
)

mathquestion_2 = Question.create(
    stem: "What is 1 * 1?",
    distractor_answer: "1",
    distractor_b: "3",
    distractor_c: "2",
    distractor_d: "0"
)

mathquestion_3 = Question.create(
    stem: "What is 1 / 1?",
    distractor_answer: "1",
    distractor_b: "3",
    distractor_c: "2",
    distractor_d: "0"
)

mathquestion_4 = Question.create(
    stem: "What is 2 * 1?",
    distractor_answer: "2",
    distractor_b: "3",
    distractor_c: "1",
    distractor_d: "0"
)

mathquestion_5 = Question.create(
    stem: "What is 2 + 1?",
    distractor_answer: "3",
    distractor_b: "2",
    distractor_c: "1",
    distractor_d: "0"
)

mathquestion_6 = Question.create(
    stem: "What is 2 / 1?",
    distractor_answer: "2",
    distractor_b: "3",
    distractor_c: "1",
    distractor_d: "0"
)

mathquestion_7 = Question.create(
    stem: "What is 3 + 1?",
    distractor_answer: "4",
    distractor_b: "5",
    distractor_c: "3",
    distractor_d: "1"
)

mathquestion_8 = Question.create(
    stem: "What is 3 * 1?",
    distractor_answer: "3",
    distractor_b: "2",
    distractor_c: "1",
    distractor_d: "0"
)

mathquestion_9 = Question.create(
    stem: "What is 3 / 1?",
    distractor_answer: "3",
    distractor_b: "1",
    distractor_c: "1.5",
    distractor_d: "2"
)

mathquestion_10 = Question.create(
    stem: "What is 3 * 0?",
    distractor_answer: "0",
    distractor_b: "3",
    distractor_c: "1",
    distractor_d: "2"
)

mathquestion_11 = Question.create(
    stem: "What is 2 * 0?",
    distractor_answer: "0",
    distractor_b: "2",
    distractor_c: "1",
    distractor_d: "0"
)

mathquestion_12 = Question.create(
    stem: "What is 1 * 0?",
    distractor_answer: "0",
    distractor_b: "4",
    distractor_c: "1",
    distractor_d: "-1"
)

mathquestion_13 = Question.create(
    stem: "What is 2 * 5?",
    distractor_answer: "10",
    distractor_b: "7",
    distractor_c: "8",
    distractor_d: "0"
)

mathquestion_14 = Question.create(
    stem: "What is 2 * 4?",
    distractor_answer: "8",
    distractor_b: "6",
    distractor_c: "2",
    distractor_d: "0"
)

mathquestion_15 = Question.create(
    stem: "What is 0 * 5?",
    distractor_answer: "0",
    distractor_b: "5",
    distractor_c: "10",
    distractor_d: "-5"
)