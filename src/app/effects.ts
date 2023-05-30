export const applyScaleOnHover = (scaleFactor: number): void => {
  document.querySelectorAll('.innerNode, .outerNode').forEach((node) => {
    const baseSize = node.getAttribute('r');
    if (!baseSize) throw new Error('Element has no size');
    node.addEventListener('mouseover', () => {
      node.setAttribute('r', (parseFloat(baseSize) * scaleFactor).toString());
      if (node.classList.contains('innerNode')) {
        node.classList.remove('innerNode');
        node.classList.add('innerNodeHover');
      }
      if (node.classList.contains('outerNode')) {
        node.classList.remove('outerNode');
        node.classList.add('outerNodeHover');
      }
    });
    node.addEventListener('mouseout', () => {
      node.setAttribute('r', baseSize);
      if (node.classList.contains('innerNodeHover')) {
        node.classList.remove('innerNodeHover');
        if (!node.classList.contains('innerNodeSelected')) {
          node.classList.add('innerNode');
        }
      }
      if (node.classList.contains('outerNodeHover')) {
        node.classList.remove('outerNodeHover');
        if (!node.classList.contains('outerNodeSelected')) {
          node.classList.add('outerNode');
        }
      }
    });
    return node;
  });
};

export const highlightEdgesOnClick = (): void => {
  document.querySelectorAll('.innerNode').forEach((node) => {
    const edges = Array.from(
      document.querySelectorAll(
        `.link[target-id=\"${node.getAttribute('id')}\"]`
      )
    );

    const outerNodes = edges
      .map((edge) =>
        document.querySelector(`[id=\"${edge.getAttribute('source-id')}\"]`)
      )
      .filter((el) => !!el) as Element[];
    node.addEventListener('click', () => {
      document.querySelector('.innerNodeSelected')?.classList.add('innerNode');
      document
        .querySelector('.innerNodeSelected')
        ?.classList.remove('innerNodeSelected');
      document.querySelector('.linkSelected')?.classList.add('link');
      document.querySelector('.linkSelected')?.classList.remove('linkSelected');
      document
        .querySelectorAll('.outerNodeSelected')
        .forEach((outerNodeSelected) => {
          outerNodeSelected.classList.remove('outerNodeSelected');
          outerNodeSelected.classList.add('outerNode');
        });
      document
        .querySelectorAll('.linkSelected')
        .forEach((outerNodeSelected) => {
          outerNodeSelected.classList.remove('linkSelected');
          outerNodeSelected.classList.add('link');
        });
      node.classList.add('innerNodeSelected');
      outerNodes.forEach((outerNode) => {
        outerNode.classList.remove('outerNode');
        outerNode.classList.add('outerNodeSelected');
      });
      edges.forEach((edge) => {
        edge.classList.remove('link');
        edge.classList.add('linkSelected');
      });
    });
  });
};
