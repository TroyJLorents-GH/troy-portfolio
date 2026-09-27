// Order, preview copy, and motion pacing are deliberately separate from the
// existing editable portfolio content in public/index.html.
export const heroContent = {
  headline: 'Full-stack products.',
  continuation: 'Built all the way through.',
};

export const sections = [
  { id: 'about', label: 'About', title: 'The person behind the work.', description: 'Full-stack products. AI systems. End-to-end ownership.', art: 'signature' },
  { id: 'skills', label: 'Skills', title: 'From interface to infrastructure.', description: 'The languages, frameworks, and platforms behind the build.', art: 'stack' },
  { id: 'work', label: 'Work', title: 'Ideas made real.', description: 'Products I build, maintain, and put into people’s hands.', art: 'work', steps: { items: '.work-case', tabs: '.case-rail [role="tab"]', progress: '.case-progress div' } },
  { id: 'impact', label: 'Impact', title: 'Built for real people.', description: 'Full-stack applications, AI services, and cloud infrastructure at ASU.' },
  { id: 'build', label: 'The build', steps: { items: '.engineering-panel', tabs: '.engineering-tabs [role="tab"]', progress: '.engineering-progress div' }, title: 'One workflow. Every layer.', description: 'Follow a class lookup from its data model to a working interface.' },
  { id: 'experience', label: 'Experience', title: 'Built in the real world.', description: 'The roles, responsibilities, and work behind the experience.' },
  { id: 'projects', label: 'Projects', title: 'More of the work.', description: 'Explore the complete project archive and repositories.' },
  { id: 'education', label: 'Education', title: 'Continuous curiosity.', description: 'Engineering, business law, and ongoing learning.' },
  { id: 'contact', label: 'Contact', title: 'Let’s build something.', description: 'Questions, opportunities, and conversations start here.' },
];

export const motion = {
  width: 1280, height: 800, desktop: '(min-width: 1100px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)',
  pixelsPerUnit: 300, readHold: 1.6, stepDuration: 1.6, handoff: .9,
  // true replays the full tilt back to the cover between every section; false keeps it for the opening only.
  tiltBetween: false, tilt: { rotationY: -32, rotationX: 14, rotation: -5, scale: .66, x: -45, y: -10 },
};
