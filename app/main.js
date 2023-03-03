// create component
const submissionComponent={
    template:`
    <div style="display: flex; width: 100%;padding:15px;">
 
        <figure class="media-left">
            <img class="image is-64x64" v-bind:src="submission.submissionImage" alt="">
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>
                        <a v-bind:href="submission.url" class="has-text-info">
                            {{ submission.title }}
                        </a>
                        <span class="tag is-small">#{{ submission.id }}</span>
                    </strong>
                        
                        <br>
                        {{submission.description}}
                        <br>
                        <small class="is-size-7">
                            Submitted By:
                            <img class="image is-24x24" v-bind:src="submission.avatar" alt="">
                        </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <sapn
             class="icon is-small"
             v-on:click="upvote(submission.id)"

            style="margin-right:2px;"
             >
                <i class="fa fa-chevron-up"></i>
            </sapn>
            <sapn
            class="icon is-small"
            v-on:click="downvote(submission.id)"
            style="margin-right:2px;"
            rounded 
            >
               <i class="fa fa-chevron-down"></i>
           </sapn>
            <strong class="has-text-info">{{ submission.votes }}</strong>

        </div>
        </div>
        `,
        props:["submission","submissions"],
        methods: {
            upvote(submissionId){
                //  "find" method, which returns the first element in the array that satisfies a given condition. The condition is specified by a callback function that is passed to the "find" method
                const submission = this.submissions.find(
                    (objectOfSubmission)=>objectOfSubmission.id===submissionId
                );
                submission.votes++;
    
            },
            downvote(submissionId){
                //  "find" method, which returns the first element in the array that satisfies a given condition. The condition is specified by a callback function that is passed to the "find" method
                const submission = this.submissions.find(
                    (objectOfSubmission)=>objectOfSubmission.id===submissionId
                );
                submission.votes--;
    
            },
        },
};

// create the application instance using the Vue function:

const upvoteApp ={
    data() {
        return {
            submissions:submissions
        }
    },
    computed: {
        sortedSubmissions(){
            return this.submissions.sort((a,b)=>{
                return b.votes-a.votes;
            })
        }
    },
    // component
    components: {
        "submission-component": submissionComponent,
        },
};

// We’re using the global createApp()API function³⁰ to create our application instance
Vue.createApp(upvoteApp).mount("#app");
