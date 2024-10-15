import { defineStore } from 'pinia'
import data from "../data.json";

export type Answer = Pick<typeof data.questions[0], 'options'>["options"][number];

export type Range = typeof data.score_ranges[0]


export const useGameStore = defineStore('game', {
  state: () => ({
    data,
    state: "idle" as "started" | "finished" | "idle",
    index: 0,
    answers: [] as Answer[],
  }),
  getters: {
    currentQuestion: (state) => state.data.questions[state.index],
    isLastQuestion: (state) => state.index === state.data.questions.length - 1,
    score: (state) => state.answers.reduce((acc, question) => acc + question.points, 0),
  },
  actions: {
    startGame() {
      this.state = "started"
    },
    finish() {
      this.state = "finished"
    },
    addAnswer(answer: Answer) {
      this.answers.push(answer)
      this.index++
      if (this.index === this.data.questions.length) {
        this.finish()
      }
    }
  }
})