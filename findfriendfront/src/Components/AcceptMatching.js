import React  from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
import { Input  } from 'react-chat-elements';
import {Button,Link,TextField,Grid } from '@material-ui/core';
class AcceptMatching extends React.Component {
    render() {
        this.state = {
            messages: [
              new Message({
                id: 1,
                message: "I'm the recipient! (The person you're talking to)",
              }), // Gray bubble
              new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
            ],
            //...
          };
        return (
      
          // Your JSX...
            <>
          <ChatFeed
            messages={this.state.messages} // Array: list of message objects
            isTyping={this.state.is_typing} // Boolean: is the recipient typing
            hasInputField={false} // Boolean: use our input, or use your own
            showSenderName // show the name of the user who sent the message
            bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
            // JSON: Custom bubble styles
            bubbleStyles={
              {
                text: {
                  fontSize: 20
                },
                chatbubble: {
                  borderRadius: 70,
                  padding: 20
                }
              }
            }
          />
      
          <TextField  labelWidth={900}
          placeholder="Type here..."/>
           <Button  variant="contained" color="primary">
                전송
            </Button>
          </>
        )
 }
}
 
 export default AcceptMatching;