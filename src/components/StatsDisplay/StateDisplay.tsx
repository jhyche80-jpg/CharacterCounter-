
import type { TextStats } from '../types/index.ts'
import "./StatsDisplay.css"

export function StatDisplay({characterCount, wordCount,readingTime}:TextStats) {

    return (
        <div className='cont'>
            
         <div className="Contaier">


                <div className='char'>
                    <h3>Character Count</h3>
                    <p>{characterCount}</p>

                </div>
                <div className='char'>
                    <h3>Word Count</h3>
                    <p>{wordCount}</p>

                </div>
                <div className='char'>
                    <h3>Time </h3>
                    <p>{readingTime}</p>

                </div>
            </div>
        </div>
    )
}
