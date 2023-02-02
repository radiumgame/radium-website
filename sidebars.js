/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'doc',
      id: 'install',
    },
    {
      type: 'category',
      label: 'Editor Reference',
      items: [
        {
          type: 'doc',
          id: 'editor/navigating',
        },
        {
          type: 'doc',
          id: 'editor/keybinds',
        },
      ],
    },
    {
      type: 'category',
      label: 'Scripting Reference',
      items: [
        {
          type: 'doc',
          id: 'scripting/overview',
        },
        {
          type: 'category',
          label: 'Audio',
          items: [
            {
              type: 'doc',
              id: 'scripting/audio/AudioClip',
            },
          ],
        },
        {
          type: 'doc',
          id: 'scripting/core/functions',
          label: 'Built-In Functions'
        },
        {
          type: 'category',
          label: 'Components',
          items: [
            {
              type: 'category',
              label: 'Audio',
              items: [
                {
                  type: 'doc',
                  id: 'scripting/components/Source'
                },
              ],
            },
            {
              type: 'category',
              label: 'Physics',
              items: [
                {
                  type: 'doc',
                  id: 'scripting/components/Rigidbody'
                },
                {
                  type: 'doc',
                  id: 'scripting/components/StaticRigidbody'
                },
              ],
            },
            {
              type: 'category',
              label: 'Graphics',
              items: [
                {
                  type: 'doc',
                  id: 'scripting/components/MeshFilter'
                },
                {
                  type: 'doc',
                  id: 'scripting/components/MeshRenderer'
                },
                {
                  type: 'doc',
                  id: 'scripting/components/Light',
                },
                {
                  type: 'doc',
                  id: 'scripting/components/Camera',
                },
              ],
            },
            {
              type: 'category',
              label: 'UI',
              items: [
                {
                  type: 'doc',
                  id: 'scripting/components/Panel',
                },
                {
                  type: 'doc',
                  id: 'scripting/components/Image',
                },
                {
                  type: 'doc',
                  id: 'scripting/components/Text',
                },
                {
                  type: 'doc',
                  id: 'scripting/components/Button',
                },
              ],
            }
          ],
        },
        {
          type: 'category',
          label: 'Core',
          items: [
            {
              type: 'doc',
              id: 'scripting/core/component'
            },
            {
              type: 'doc',
              id: 'scripting/core/gameobject'
            },
            {
              type: 'doc',
              id: 'scripting/core/script'
            },
            {
              type: 'doc',
              id: 'scripting/core/transform'
            },
          ],
        },
        {
          type: 'category',
          label: 'Graphics',
          items: [
            {
              type: 'doc',
              id: 'scripting/graphics/Color',
            },
            {
              type: 'doc',
              id: 'scripting/graphics/Material',
            },
            {
              type: 'doc',
              id: 'scripting/graphics/Mesh',
            },
          ],
        },
        {
          type: 'category',
          label: 'Math',
          items: [
            {
              type: 'doc',
              id: 'scripting/math/Vector2',
            },
            {
              type: 'doc',
              id: 'scripting/math/Vector3',
            },
          ],
        },
        {
          type: 'category',
          label: 'Misc',
          items: [
            {
              type: 'doc',
              id: 'scripting/input',
            },
            {
              type: 'doc',
              id: 'scripting/time',
            },
          ],
        },
        {
          type: 'category',
          label: 'UI',
          items: [
            {
              type: 'doc',
              id: 'scripting/ui/ButtonEvent',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Shader Reference',
      items: [
        {
            type: 'category',
            label: 'Data Types',
            items: [
              {
                type: 'doc',
                id: 'shaders/data-types/Color'
              },
              {
                type: 'doc',
                id: 'shaders/data-types/GameObject'
              },
              {
                type: 'doc',
                id: 'shaders/data-types/Light'
              },
              {
                type: 'doc',
                id: 'shaders/data-types/Material'
              },
            ],
        },
        {
          type: 'category',
          label: 'Functions',
          items: [
            {
              type: 'doc',
              id: 'shaders/functions/overview'
            },
            {
              type: 'doc',
              id: 'shaders/functions/color'
            },
            {
              type: 'doc',
              id: 'shaders/functions/lighting'
            },
            {
              type: 'doc',
              id: 'shaders/functions/math'
            },
            {
              type: 'doc',
              id: 'shaders/functions/noise'
            },
            {
              type: 'doc',
              id: 'shaders/functions/texture'
            },
            {
              type: 'doc',
              id: 'shaders/functions/util'
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'doc',
          id: 'examples/first-script',
        }
      ],
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
