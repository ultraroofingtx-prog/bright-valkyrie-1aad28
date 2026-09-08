#!/bin/bash

cities=(
  "Irving" "Arlington" "Plano" "Frisco" "McKinney" "Denton" "Lewisville"
  "FlowerMound:Flower Mound" "Grapevine" "Carrollton" "Richardson" "Garland"
  "Mesquite" "Allen" "TheColony:The Colony" "Coppell" "Southlake" "Keller"
  "Rockwall" "Mansfield" "Weatherford" "Waxahachie" "Burleson" "Prosper" "Wylie"
)

for city_data in "${cities[@]}"; do
  IFS=':' read -ra PARTS <<< "$city_data"
  filename="${PARTS[0]}Page.tsx"
  cityname="${PARTS[1]:-${PARTS[0]}}"
  
  cat > "$filename" << EOF
import CityPageTemplate from '../../components/CityPageTemplate';

export default function ${PARTS[0]}Page() {
  return (
    <CityPageTemplate
      cityName="$cityname"
      additionalContent="As a locally owned and insured company based in the DFW metroplex, we are proud to serve our neighbors in $cityname with fast response times and exceptional results."
    />
  );
}
EOF
done

echo "Generated city pages successfully"
