import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import orgjs from '@salesforce/resourceUrl/OrganizationChart';

export default class OrganizationChart extends LightningElement {

    connectedCallback() {

        console.log(orgjs);
        loadScript(this, orgjs).then(() => {
            this.initializeChart();
        });
    }

    initializeChart() {

        let container = this.template.querySelector('div');
        console.log(container);

        let chart = new OrgChart(container, {
            enableDragDrop: true,
            tags: {
                "assistant": {
                    template: "ula"
                }
            },
            nodeMenu: {
                details: { text: "Details" },
                edit: { text: "Edit" },
                add: { text: "Add" },
                remove: { text: "Remove" }  
            },
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                img_0: "img"
            },
            nodes: [
                { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
                { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
                { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
                { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
                { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
                { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
                { id: 8, pid: 1, tags: ["assistant"], name: "Rudy Griffiths", title: "Assistant", img: "https://cdn.balkan.app/shared/9.jpg" },
            ]
        });        

    }




}