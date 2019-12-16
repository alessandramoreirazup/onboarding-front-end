export class QuestionModel{
    idStep: number
    description: String
    alternative1: String
    alternative2: String
    
    //atributos da alternative
    altDescription: String
    altCorrect: number
    //queria criar um array dessas alternativas, que no total serão 4
}

export class AlternativeQuestionModel{
    description: String
    correct: boolean
}