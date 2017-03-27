import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: `
<p>Item</p>
`
})
export class ItemComponent extends Vue {

    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';

    mounted() {
        this.$nextTick(() => console.info('item is ready!'));
    }
}