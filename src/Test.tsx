import { ResponsivePie } from "@nivo/pie";

const Test = () => {

  const data = [
    {
      color: 'hsl(172, 70%, 50%)',
      id: 'python',
      value: 496
    },
    {
      color: 'hsl(179, 70%, 50%)',
      id: 'ruby',
      value: 115
    },
    {
      color: 'hsl(315, 70%, 50%)',
      id: 'erlang',
      value: 204
    },
    {
      color: 'hsl(229, 70%, 50%)',
      id: 'haskell',
      value: 380
    },
    {
      color: 'hsl(354, 70%, 50%)',
      id: 'rust',
      value: 207
    },
    {
      color: 'hsl(233, 70%, 50%)',
      id: 'stylus',
      value: 101
    },
    {
      color: 'hsl(313, 70%, 50%)',
      id: 'elixir',
      value: 55
    },
    {
      color: 'hsl(38, 70%, 50%)',
      id: 'sass',
      value: 215
    },
    {
      color: 'hsl(221, 70%, 50%)',
      id: 'css',
      value: 26
    }
  ]

return <div style={{ height: 500}}>
  <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />

</div>
}

export default Test;