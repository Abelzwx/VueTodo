import '../assets/styles/footer.less';

export default {
    data() {
        return {
            author: 'wxzhang'
        }
    },
    render() {
        return (
            <div class="footer">
                <span>Power by {this.author}</span>
            </div>
        )
    }
}