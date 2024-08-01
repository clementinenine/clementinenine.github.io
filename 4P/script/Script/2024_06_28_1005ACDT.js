// ==UserScript==
// @name         REC:P^4 Script
// @version      2024_06_28_1005ACDT
// @description  AAO Workskin for Pink and Parcark just so we can have a niceys looking textbox
// @author       pinkcocoapowder
// @match        *://www.aaonline.fr/player.php?trial_id=147242*
// @match        *://aaonline.fr/player.php?trial_id=147242*
// @match        *://www.aaonline.fr/player.php?trial_id=147242&debug*
// @match        *://.aaonline.fr/player.php?trial_id=147242&debug*
// @icon         *https://clementinenine.github.io/4P/script/ency.png*
// @grant        none
// ==/UserScript==

    // Cobbled together with Timeaxis'(AAO) and laurelnose's (AO3) code and my images//
     var ifuckinghatejavascript = `
 .textbox.bottom .name {
    background: rgba(144,39,15,.75);
    border-radius: 0px;

 .dialogue {
    border-radius: unset !important;

  }
` //remember//

    var style = document.createElement('style');
    style.appendChild(document.createTextNode(ifuckinghatejavascript));
    document.head.appendChild(style);

    // Modify the "content" div
    const contentDiv = document.getElementById('content');


const end = document.getElementById('end');
const topScreen = document.getElementById('screen-top');
const bottomScreen = document.getElementById('screen-bottom');
const metaScreen = document.getElementById('screen-meta');
const examScreen = document.getElementById('screen-examination');
const button = document.getElementById('wait');
const check = document.getElementById('screen-cr-item-check');
const checkContents = document.getElementById('cr-item-check-contents');
const checkPagination = document.getElementById('cr-item-check-pagination');
const buttonBarTop = document.querySelectorAll('.buttonbar-top');
const buttonBarBottom = document.querySelectorAll('.buttonbar-bottom');
const optionsDiv = document.getElementById('options');
const optionsE = document.getElementById('options-investigation-examine');
const optionsM = document.getElementById('options-investigation-move');
const optionsT = document.getElementById('options-investigation-talk');
const optionsP = document.getElementById('options-investigation-present');
const back = document.getElementById('back');
const preCen = document.getElementById('present-center');

    function getElementByStartingString (elements, searchString) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML.startsWith(searchString)) {
                return elements[i];
            }
        }
        return null;
    }

    function handleDOMChanges(mutationsList, observer) {
        aElements = optionsDiv.querySelectorAll('a');
 // Apply CSS options to each element in the updated array
        aElements.forEach(function (element) {
            element.style.margin = "unset";
            element.style.backgroundColor = "unset";
            element.style.border = "unset";
            element.style.borderColor = "unset";
            element.style.borderRadius = "unset";
            element.style.boxShadow = "unset";
            if(element.innerHTML.endsWith("[x]")){
                element.innerHTML = element.innerHTML.slice(0, -3);
                element.style.color = "#808080";
                element.isGrey = true;
            } else {
                if (element.isGrey){
                    element.style.color = "#808080";
                } else {
                    element.style.color = "white";
                }
            }
            element.style.display = "block";
            element.style.marginLeft = "5px";
            element.style.padding = "0px";
            element.style.minHeight = "16px";
            element.style.fontSize = "12px";
            element.style.textAlign = "left";
            element.style.marginBottom = "0px";
            element.style.marginRight = "5px"
            element.style.marginTop = "5px";
            element.style.position = "relative";
            element.style.font = "12px aaDialogueText, sans-serif";
            element.style.backgroundColor = "rgba(144,39,15,.75)";
            element.classList.add("hover-effect");
        });
    }



    var optionObserver = new MutationObserver(handleDOMChanges);

    // Configure the observer to watch for changes in the optionsDiv
    var observerConfig = { childList: true, subtree: true };
    optionObserver.observe(optionsDiv, observerConfig);

    // Initial population of the aElements array
    var aElements = optionsDiv.querySelectorAll("a");


    checkContents.style.bottom = 'unset';
    checkPagination.style.bottom = 'unset';
    check.style.bottom = 'unset';

    optionsE.style.backgroundColor = ('rgba(144,39,15,.75)')
    optionsE.style.borderRadius = "unset"
    optionsE.style.borderColor = "#474847"
    optionsE.style.boxShadow = "unset"

    optionsT.style.backgroundColor = ('rgba(144,39,15,.75)')
    optionsT.style.borderRadius = "unset"
    optionsT.style.borderColor = "#474847"
    optionsT.style.boxShadow = "unset"

    optionsP.style.backgroundColor = ('rgba(144,39,15,.75)')
    optionsP.style.borderRadius = "unset"
    optionsP.style.borderColor = "#474847"
    optionsP.style.boxShadow = "unset"

    optionsM.style.backgroundColor = ('rgba(144,39,15,.75)')
    optionsM.style.borderRadius = "unset"
    optionsM.style.borderColor = "#474847"
    optionsM.style.boxShadow = "unset"

    back.style.backgroundColor = ('rgba(144,39,15,.75)')
    back.style.borderRadius = "unset"
    back.style.borderColor = "#474847"
    back.style.boxShadow = "unset"

    preCen.style.backgroundColor = ('rgba(144,39,15,.75)')
    preCen.style.borderRadius = "unset"
    preCen.style.borderColor = "#474847"
    preCen.style.boxShadow = "unset"

    bottomScreen.style.backgroundImage = 'url(https://clementinenine.github.io/4P/script/desrites_bg.png)';




const bsButtons = document.querySelectorAll('.bs-button.center');

bsButtons.forEach(button => {
        button.style.backgroundColor = 'rgba(144,39,15,1)';
        button.style.border = 'unset';
        button.style.boxShadow = 'unset';
        button.style.width = '256px';
        button.style.left = 'unset';
    });




//BACKLOG//

function logscript_init() {
    console.log("logscript_init() function started.");

	const logscript_oldproceed = proceed;

	var logscript_lastText = "";
	var logscript_lastName = "";
	var logscript_lastFrameID = -1;
	var logscript_lastMerged = false;

	var logscript_currentFrameData = false;
	var logscript_currentText = "";
	var logscript_currentName = "";
	var logscript_currentFrameID = -1;
	var logscript_mergedFrame = false;

	var logscript_log = [];

	proceed = function(conditions, backwards){
		logscript_currentFrameData = trial_data.frames[player_status.current_frame_index];

		logscript_currentFrameID = logscript_currentFrameData.id;
		logscript_mergedFrame = logscript_currentFrameData.merged_to_next;
		logscript_currentText = top_screen.text_display.dialogue_box.innerHTML;
		logscript_currentName = top_screen.text_display.name_box.innerHTML;

		//Check for partially completed textbox
		var ls_fake_container = document.createElement('div');
		top_screen.text_display.instantTypeText(ls_fake_container, top_screen.text_display.dialogue_box.textContent);
		var ls_clean_text_contents1 = ls_fake_container.textContent.trim();
		ls_fake_container.remove();
		ls_fake_container = document.createElement('div');
		top_screen.text_display.instantTypeText(ls_fake_container, logscript_currentFrameData.text_content);
		var ls_clean_text_contents2 = ls_fake_container.textContent.trim();
		ls_fake_container.remove();
		ls_fake_container = null;

		const logscript_result = logscript_oldproceed.apply(this, arguments);

		if (ls_clean_text_contents1 == ls_clean_text_contents2 || (logscript_lastMerged)){
			if ((!logscript_mergedFrame) && (logscript_currentFrameID != logscript_lastFrameID) && ((player_status.proceed_click_met) || (player_status.proceed_timer_met && player_status.proceed_timer && player_status.proceed_typing) || (player_status.proceed_typing_met) || ((!player_status.proceed_click_met) && (!player_status.proceed_timer_met) && (!player_status.proceed_typing_met))) && (logscript_currentText != "")){
				logscript_addToLog(logscript_currentName,logscript_currentText);
				logscript_refreshLog();

				logscript_lastText = logscript_currentText;
				logscript_lastName = logscript_currentName;
				logscript_lastFrameID = logscript_currentFrameID;
				logscript_lastMerged = logscript_mergedFrame;
			}
		} else {
			console.log("1:" + ls_clean_text_contents1 +"/2:" + ls_clean_text_contents2);
			logscript_lastMerged = logscript_mergedFrame;
		}



		return logscript_result;
	};

	function logscript_addToLog(name, frametext) {
		if (logscript_log.length > 99) {
			// Remove the first element
			logscript_log.shift();
		}
		logscript_log.push([name, frametext]);
	}

	function logscript_refreshLog(){
		const logscript_contentContainer = document.getElementById('backlog_content');
		logscript_contentContainer.innerHTML = ""
		for(let i = 0; i < logscript_log.length; i++){
			let name = logscript_log[i][0];
			let dialogue = logscript_log[i][1];
			if(name != ""){
				logscript_contentContainer.innerHTML = logscript_contentContainer.innerHTML + "<span class='backlog-name'>" + name + "</span><br/><div class='backlog-text'>" + dialogue + "</div>";
			} else {
				logscript_contentContainer.innerHTML = logscript_contentContainer.innerHTML + "<br/><div class='backlog-text'>" + dialogue + "</div>";
			}
		}
		logscript_contentContainer.scrollTop = logscript_contentContainer.scrollHeight;
	}

	// Create a button element
	const logscript_logButton = document.createElement("button");

	// Set the button's CSS style
	logscript_logButton.style.position = 'absolute';
	logscript_logButton.style.top = '-2px';
	logscript_logButton.style.left = '-2px';
    logscript_logButton.style.color = '(rgb(144,39,15))';

	// Find the parent element with the id "screen-meta"
	const logscript_screenMeta = document.getElementById('screen-meta');

	// Append the button to the parent element
	logscript_screenMeta.appendChild(logscript_logButton);
	logscript_logButton.id = "backlog-button";
	logscript_logButton.innerHTML = "Backlog";
	logscript_logButton.onclick = toggleBacklog;

	// Create Backlog HTML and CSS
	function logscript_generateBacklog() {
		// Create main container
		const logscript_container = document.createElement('div');
		logscript_container.id = 'backlog';
		logscript_container.className = 'backlog-container';

		// Create header
		const logscript_header = document.createElement('div');
		logscript_header.className = 'backlog-header';
		logscript_header.textContent = 'FELD Playback:';

		// Create close icon
		const logscript_closeIcon = document.createElement('div');
		logscript_closeIcon.className = 'backlog-close-icon';
		logscript_closeIcon.textContent = '✖';
		logscript_closeIcon.onclick = closeBacklog;

		// Append close icon to the header
		logscript_header.appendChild(logscript_closeIcon);

		// Create content container
		const logscript_contentContainer = document.createElement('div');
		logscript_contentContainer.id = 'backlog_content';
		logscript_contentContainer.className = 'backlog-content';

		// Append header and content to the main container
		logscript_container.appendChild(logscript_header);
		logscript_container.appendChild(logscript_contentContainer);

		// Append the main container to the document body
		const logscript_parentDiv = document.getElementById('screens');
		logscript_parentDiv.insertBefore(logscript_container, logscript_parentDiv.childNodes[2]);
		logscript_container.style.display = 'none';

		// Create style element
		const styleElement = document.createElement('style');
		styleElement.textContent = `
			.backlog-container {
				width: 254px;
				z-index: 999;
				height: 185px;
				position: absolute;
				background-color: #222222;
                color: #cfd5bf;
				left: 0px;
				width: 256px;
				min-height: 52px;
				margin: 10px;
				padding: 2px 2px 2px 2px;
				border: 2px ridge rgba(136, 136, 136, 0.75);
				border-radius: 3px;
				resize: none;
				background: rgba(0, 0, 0, 0.85);
				font: 12px aaDialogueText, sans-serif;
				text-align: start;
				line-height: 16px;
                background-image: repeating-linear-gradient(180deg, #939593 0, #939593 1.25em, transparent 0, transparent 1.75cm), repeating-linear-gradient(180deg, #5d6163 0, #545758 2px, transparent 0, transparent .5cm), linear-gradient(90deg, #616364 0, #616364 .75em, transparent .75em), linear-gradient(270deg, #616364 0, #616364 .75em, transparent .75em), repeating-linear-gradient(180deg, #393734 0, #393734 2px, transparent 0, transparent 2.5cm), repeating-linear-gradient(180deg, #393734 0, #393734 2px, transparent 0, transparent .5cm);
                background-position: 100% 0, 0 20px, 0 0, 0 0, 0 10px, 0 10px;
                background-size: .2em 100%, .3em 100%, 100% 100%, 100% 100%, 2.25em 100%, 1.2em 100%;
                background-repeat: no-repeat;
			}

			.backlog-header {
				font: 12px 'Courier New', monospace;
				font-weight: bold;
                color: #C2C2C2;
			}

			.backlog-close-icon {
				position: absolute;
				top: 1px;
				right: 2px;
				cursor: pointer;
				font: 12px sans-serif;
				text-align: start;
				white-space: pre-wrap;
				line-height: 16px;
				color: white;
			}

			.backlog-close-icon:hover {
				color: grey;
			}

			.backlog-content {
				overflow-y: auto !important;
				height: 150px;
				text-align: left;
				scrollbar-width: thin;
				padding: 20px 10px 0px 15px;
				position: relative;
				width: 256px;
				color: white;
			}

			.backlog-name {
				margin-top: 7px;
				height: 12px;
				min-width: 44px;
				padding: 0 2px;
				overflow: hidden;
				border: 2px double rgba(136,136,136,0.75);
				border-radius: 3px;
                background: rgba(69,57,73,0.75)
				white-space: nowrap;
				font-size: 10px;
				line-height: 10px;
				color: white;
                text-transform: uppercase;
			}

			.backlog-text {
				margin-bottom: 0px;
			}
		`;

		// Append style element to the document head
		document.head.appendChild(styleElement);
	}

	// Function to close backlog (example function, replace with your logic)
	function closeBacklog() {
		const logscript_container = document.getElementById('backlog');
		logscript_container.style.display = 'none';
	}

	function openBacklog() {
		const logscript_container = document.getElementById('backlog');
		const logscript_contentContainer = document.getElementById('backlog_content');

		logscript_container.style.display = 'block';
		logscript_contentContainer.scrollTop = logscript_contentContainer.scrollHeight;
	}

	function toggleBacklog() {
		const logscript_container = document.getElementById('backlog');
		if (logscript_container.style.display === 'none' || logscript_container.style.display === '') {
			openBacklog();
		} else {
			closeBacklog();
		}
		logscript_logButton.blur();
	}

	// Call the function to generate HTML and CSS
	logscript_generateBacklog();
}

window.addEventListener('load', function () {
    logscript_init(); // Call the init function after the window has loaded
});

console.log("Logscript loaded.");

