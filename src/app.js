import React, { Component } from 'react'
import submitData from './submitService';
class App extends Component{

    constructor(props){
        super(props);
        this.state ={
            CampaignId: '',
            BannerURL: '',
            ValidTill: Date.now
        }
        this.submit = this.submit.bind(this);
    }

    submit = (event) => {
        event.preventDefault();

        const data = {
            CampaignId: this.state.CampaignId,
            BannerURL: this.state.BannerURL,
            ValidTill: this.state.ValidTill
        };

        console.log("Submit Clicked!!");
        console.log("data: "+JSON.stringify(data));

        submitData(data);
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value });

    render() {
        
        return(
            <div>
                <form>
                <div>
                    <label>CampaignId:</label>
                    <input type="text" placeholder="CampaignId" name="CampaignId" value={this.state.CampaignId} onChange={this.onChange}/>
                </div><br></br>

                <div>
                    <label>Banner URL:</label>
                    <input type="text" placeholder="Banner URL" name="BannerURL" value={this.state.BannerURL} onChange={this.onChange}/>
                </div><br></br>

                <div>
                    <label>Valid Till:</label>
                    <input type="date" placeholder="Valid Till" name="ValidTill" value={this.state.ValidTill} onChange={this.onChange}/>
                </div><br></br>

                <div>
                    <button onClick={this.submit}>Submit</button>
                </div>                
            </form>
        </div>
        );
        
    }
}

export default App;