import React, {Component} from "react";
import photo from "../../images/depositphotos_28907987-stock-photo-colosseum-in-rome.jpg"


class Select extends Component {
    state = {
        select: ''
    };

    onChangeSelect = (e, correctAnswer) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
        let point = value === correctAnswer ? 1 : 0;
        this.props.addPoint(this.props.index, point)
    };

    onChange = (e) => {
        this.onChangeSelect(e, this.props.correctAnswer)
    };
    render() {
        if (!this.props.select) {
            return null
        }
        let result = this.props.select.map((q, i) => <option key={i} value={q.answer}>{q.answer}</option>);
        return (
            <div>
                <img src={photo}/>
                <div>
                    <select name="select" value={this.state.select} onChange={this.onChange}>
                        {result}
                    </select>
                </div>
            </div>
        )
    }
}


export default Select;