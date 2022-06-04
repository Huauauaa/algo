export default function sidebar() {
  return [
    {
      text: "JS",
      collapsible: true,
      items: [
        { text: "防抖", link: "../js/debounce" },
        { text: "节流", link: "../js/throttle" },
      ],
    },
    {
      text: "数学",
      collapsible: true,
      items: [{ text: "排列组合", link: "../math/排列组合" }],
    },
  ];
}
