import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: `
<ul>
    <li>List</li>
</ul>
`
})
export class ListComponent extends Vue {

    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';

    mounted() {
        this.$nextTick(() => console.info('list is ready!'));
    }
}