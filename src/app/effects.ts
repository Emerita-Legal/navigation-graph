export const applyEffects = () => {
  popOnLoad();
  scaleOnHover();
  highlightOnNodeClick();
  highlightEdgesOnInnerClick();
  highlightEdgesOnOuterClick();
};

const getAllEdgesFromNode = (node: Element, type: 'source' | 'target') => {
  return Array.from(
    document.querySelectorAll(
      `.link[${type}-id=\"${node.getAttribute('id')}\"]`
    )
  );
};

const getTargetNode = (node: Element) => {
  const nodeId = document
    .querySelector(`.link[source-id=\"${node.getAttribute('id')}\"]`)
    ?.getAttribute('target-id');
  return document.querySelector(`[id=\"${nodeId}\"]`);
};

const removeAllNodeHighLightClasses = (querySelector: string) => {
  document.querySelectorAll(querySelector).forEach((n) => {
    n.classList.remove('nodeSelected');
    n.classList.remove('nodePreSelected');
  });
};

const removeAllEdgeHighLightClasses = () => {
  document
    .querySelectorAll('.link')
    .forEach((edge) => edge.classList.remove('linkSelected'));
};

const scaleOnHover = () => {
  const SCALE_FACTOR = 1.1;
  document.querySelectorAll('circle').forEach((node) => {
    const baseSize = node.getAttribute('r');
    if (!baseSize) throw new Error('Element has no size');
    node.addEventListener('mouseover', () => {
      node.setAttribute('r', (parseFloat(baseSize) * SCALE_FACTOR).toString());
      node.classList.add('nodeHovered');
    });
    node.addEventListener('mouseout', () => {
      node.setAttribute('r', parseFloat(baseSize).toString());
      node.classList.remove('nodeHovered');
    });
  });
};

const highlightOnNodeClick = () => {
  const nodes = document.querySelectorAll('.innerNode, .outerNode');
  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      removeAllNodeHighLightClasses('.innerNode, .outerNode');
      node.classList.add('nodeSelected');
    });
  });
};

const highlightEdgesOnInnerClick = () => {
  document.querySelectorAll('.innerNode').forEach((node) => {
    node.addEventListener('click', () => {
      const edges = getAllEdgesFromNode(node, 'target');
      removeAllEdgeHighLightClasses();
      edges.forEach((edge) => edge.classList.add('linkSelected'));
      highlightOuterFromEdges(edges);
    });
  });
};

const highlightEdgesOnOuterClick = () => {
  document.querySelectorAll('.outerNode').forEach((node) => {
    node.addEventListener('click', () => {
      const targetNode = getTargetNode(node);
      if (targetNode) {
        const edges = getAllEdgesFromNode(targetNode, 'target');
        removeAllEdgeHighLightClasses();
        edges.forEach((edge) => edge.classList.add('linkSelected'));
        highlightOuterFromEdges(edges);
        node.classList.add('nodeSelected');
        targetNode.classList.add('nodeSelected');
      }
    });
  });
};

const highlightOuterFromEdges = (edges: Element[]) => {
  const outerNodes = edges
    .map((edge) =>
      document.querySelector(`[id=\"${edge.getAttribute('source-id')}\"]`)
    )
    .filter((el) => !!el) as Element[];
  removeAllNodeHighLightClasses('.outerNode');
  outerNodes.forEach((node) => node.classList.add('nodePreSelected'));
};

const popOnLoad = () => {
  const centralNodeNumber = document.querySelectorAll('.innerNodes').length + 1;
  document.querySelectorAll('circle').forEach((node, index) => {
    node.style.transform = 'scale(0)';
    node.style.transition = `transform ${
      index > centralNodeNumber ? '300m' : '1'
    }s ease-in-out`;
    setTimeout(() => {
      node.style.transform = 'scale(1)';
    }, 300 + index * 30);
  });
  document.querySelectorAll('.label-container').forEach((node: any, index) => {
    node.style.transform = 'scale(0)';
    node.style.transition = `transform ${
      index > centralNodeNumber ? '300m' : '1'
    }s ease-in-out`;
    setTimeout(() => {
      node.style.transform = 'scale(1)';
    }, 300 + (index > centralNodeNumber ? index * 30 : 0));
  });
  document.querySelectorAll('.link-start').forEach((node: any) => {
    setTimeout(() => {
      node.style.opacity = '0.9';
    }, 1500);
  });
};
