"use strict";

function toggleTableEditing({ bool = false, Container = document }) {
  const inps = Container.querySelectorAll("input");

  bool && inps.forEach((i) => i.removeAttribute("readOnly"));
  bool || inps.forEach((i) => (i.readOnly = true));
}
