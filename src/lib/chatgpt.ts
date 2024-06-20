import OpenAI from 'openai'

export default class ChatGPT {
  static async makeCall(run: any, openai: any) {
    console.log('making call')

    // Call ChatGPT
    if (run.status === 'completed') {
      const output = []
      const messages = await openai.beta.threads.messages.list(run.thread_id)
      for (const message of messages.data.reverse()) {
        //@ts-ignore
        console.log(`${message.role} > ${message.content[0].text.value}`)
        //@ts-ignore
        output.push(message.content[0].text.value)
      }
      return output.join(',')
    } else {
      console.log(run.status)
    }
  }

  static async fetchData(text: string) {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_CHAT_GPT_KEY,
      dangerouslyAllowBrowser: true,
    })

    const thread = await openai.beta.threads.create()

    let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: process.env.NEXT_PUBLIC_ASSISTANCE_ID!,
      instructions: text,
    })

    const result = await this.makeCall(run, openai)
    console.log(result)
    return result
  }
}
