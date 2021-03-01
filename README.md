# Simple Javascript Modal
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cryancaire/simple-javascript-modal?style=plastic)
![Lines of code](https://img.shields.io/tokei/lines/github/cryancaire/simple-javascript-modal?style=plastic)
![GitHub followers](https://img.shields.io/github/followers/cryancaire?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/cryancaire?style=social)

![Screenshot](/images/screenshot3.png)<br>
![Screenshot](/images/screenshot1.png)


## What is this?
This is a simple Modal popup created with Javascript, CSS and HTML. 

## Why did you make this?
Modal windows can be hard to work with, require Bootstrap or another huge library, or just plain confusing. This should hopefully help you, me and others create modal popups with some limited customization.

## Anything else I should know?
Hmm... something good to know is that you can have multiple modals on the same page with this code! Just repeat steps 2-4 for additional modals you want to have and customize!

## Great! So how do I use it?
That part is pretty easy! Just follow these steps!

1. Add these javascript and css files to your page:
    1. `<link rel="stylesheet" href="modal.css">`
    2. `<script src="modal.js" defer></script>`
2. Create a simple modal structure
    1. Your modal Id should be unique.
    2. `data-title` is optional and will default to "Dialog" if not present.
    ``
    <modal id="myModal" data-title="My Modal Title">
        This is my modal content! I can put HTML or regular text here!
    </modal>
    ``
3. Add a button like below to open your modal.
    1. `<button class="__modal-open" data-modal-id="myModal">Open My Modal</button>`
        - You MUST have the class `__modal-open` on this button
        - `data-model-id` must equal the id you specified in the model id.
    2. Alternatively you can use an anchor tag as follows to open your modal as well:
        - `<a class="__modal-open" data-modal-id="myModal">Open My Modal</a>`

4. (Optional parameters)
    1. `data-title="My Modal Title"` this is optional and will default to "Dialog" if blank or not present.
    2. `data-overlay-close="true"` if set to true, clicking the grey overlay background will close the modal.
    3. `data-overlay-escape="true"` if set to true, pressing the `Escape` key will close the modal.
    4. `data-modal-width="80vw"` set the width of the modal in any unit, defaults to `30vw` if not present
    5. `data-modal-height="50vh"` set the height of the modal in any unit, defaults to `10vh` if not present.

# About Me
[![Cryancaire's GitHub stats](https://github-readme-stats.vercel.app/api?username=cryancaire&hide=prs,issues,stars&count_private=true&show_icons=true&theme=dark)](https://github.com/anuraghazra/github-readme-stats)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=cryancaire&layout=compact)](https://github.com/anuraghazra/github-readme-stats)