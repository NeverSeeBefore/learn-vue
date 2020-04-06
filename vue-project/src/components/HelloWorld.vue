<script>
export default {
  functional: true,
  name: "HelloWorld",
  props: {
    level: Number
  },
  render(h, context) {
    console.log(h, context);
    const tag = "h" + context.props.level;
    return (
      <tag>
        {context.slots().default}
        {
          context.scopedSlots.default()
        }
      </tag>
    );
  }
};
</script>