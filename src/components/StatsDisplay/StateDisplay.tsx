
import type { TextStats } from '../types/index.ts'


export function StatDisplay({characterCount, wordCount,readingTime}:TextStats) {

    return (
        <div>
            
         <div className="Contaier">


                <div>
                    <h3>Character Count</h3>
                    <p>{characterCount}</p>

                </div>
                <div>
                    <h3>Word Count</h3>
                    <p>{wordCount}</p>

                </div>
                <div>
                    <h3>Time </h3>
                    <p>{readingTime}</p>

                </div>
            </div>
        </div>
    )
}
