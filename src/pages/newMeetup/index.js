import NewMeetupForm from "@/components/meetups/NewMeetupForm"


 export function NewMeetupPage(){

    function addMeetupHandler(enteredMeetupData){

        console.log('enteredMeetupData', enteredMeetupData)
    }

        return(
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
            
        )
 }