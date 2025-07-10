import { useRoomQuestions } from '@/http/use-room-questions'
import { QuestionItem } from './question-item'

interface QuestionListProps {
    roomId: string
}

export function QuestionList(props: QuestionListProps) {
    const { data } = useRoomQuestions(props.roomId)

    // Ensure data is always an array to avoid .map errors
    const questions = Array.isArray(data) ? data : []

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl text-foreground">
                    Perguntas & Respostas
                </h2>
            </div>

            {questions.map((question) => {
                return <QuestionItem key={question.id} question={question} />
            })}
        </div>
    )
}