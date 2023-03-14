import React from "react";

export default function AddQuestion() {
    return <>
        <h1>Add Question</h1>
        <form>
            <div class="form">
                <label>
                    <p>Question</p>
                    <input type="text" placeholder="Enter question" />
                </label>
                <label>
                    <p>Add image</p>
                    <input type="file" placeholder="Add image" />
                </label>
                <label>
                    <p>Option A</p>
                    <input type="text" placeholder="Option A" />
                    </label>
                <label>
                    <p>Option B</p>
                    <input type="text" placeholder="Option B" />
                </label>
                <label>
                    <p>Option C</p>
                    <input type="text" placeholder="Option C" />
                    </label>
                <label>
                    <p>Option D</p>
                    <input type="text" placeholder="Option D" />
                </label>
                <label>
                    <p>Select Answer</p>
                    <select>
                        <option>Select Answer</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </label>
                <input type="submit" className="btn" value="Add question"/>
            </div>
        </form>
    </>
}
