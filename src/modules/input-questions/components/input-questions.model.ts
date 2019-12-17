export class QuestionModel{
    idStep: number
    description: String
    alternative1: String
    alternative2: String

    //queria criar um array dessas alternativas, que no total serão 4
    alternatives: Array<AlternativeQuestionModel>
    //atributos da alternative
    altDescription: String
    altCorrect: number
}

export class AlternativeQuestionModel{
    description: String
    correct: boolean
}