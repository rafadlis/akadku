"use client"

import { HeartIcon } from "@phosphor-icons/react"
import {
  type Node,
  type BuiltInNode,
  type NodeProps,
  type FitViewOptions,
  type EdgeProps,
  Handle,
  Position,
  useNodesState,
  Edge,
  useEdgesState,
  ReactFlow,
  BaseEdge,
  getBezierPath,
  SelectionMode,
  EdgeLabelRenderer,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

export type BrideGroomNode = Node<
  {
    name: string
    role: string
  },
  "bride-groom"
>

export type AppNode = BuiltInNode | BrideGroomNode

export const initialNodes: AppNode[] = [
  {
    id: "1",
    type: "bride-groom",
    position: { x: 0, y: 0 },
    data: {
      name: "H. Iman Maolani",
      role: "Ayah Pengantin Wanita",
    },
  },
  {
    id: "2",
    type: "bride-groom",
    position: { x: 170, y: 0 },
    data: {
      name: "Hj. Tati",
      role: "Ibu Pengantin Wanita",
    },
  },
  {
    id: "3",
    type: "bride-groom",
    position: { x: 100, y: 100 },
    data: {
      name: "Dede Elin, M.Pd",
      role: "Pengantin Wanita",
    },
  },
  {
    id: "4",
    type: "bride-groom",
    position: { x: 30, y: 230 },
    data: {
      name: "R. Rahmat Fadli Sadikin, A. Md. Pj.",
      role: "Pengantin Pria",
    },
  },
  {
    id: "5",
    type: "bride-groom",
    position: { x: 0, y: 330 },
    data: {
      name: "Rd. Hasan Sadikin, S.H.",
      role: "Ayah Pengantin Pria",
    },
  },
  {
    id: "6",
    type: "bride-groom",
    position: { x: 220, y: 330 },
    data: {
      name: "Sri Mulyati",
      role: "Ibu Pengantin Pria",
    },
  },
]

export const nodeTypes = {
  "bride-groom": BrideGroomNode,
}

export function BrideGroomNode({ data }: NodeProps<BrideGroomNode>) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id="top-target"
        style={{ opacity: 0 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-target"
        style={{ opacity: 0 }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-target"
        style={{ opacity: 0 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        style={{ opacity: 0 }}
      />
      <div className="flex flex-col items-center justify-center border px-4 py-1.5 bg-muted/50">
        <div className="text-sm font-serif">{data.name}</div>
        <div className="text-xs text-muted-foreground">{data.role}</div>
      </div>
      <Handle
        type="source"
        position={Position.Top}
        id="top-source"
        style={{ opacity: 0 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-source"
        style={{ opacity: 0 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-source"
        style={{ opacity: 0 }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left-source"
        style={{ opacity: 0 }}
      />
    </>
  )
}

export const initialEdges: Edge[] = [
  {
    id: "e1-3",
    source: "1",
    sourceHandle: "bottom-source",
    target: "3",
    targetHandle: "top-target",
    type: "bride-groom",
    style: { stroke: "var(--primary)", strokeWidth: 1 },
    animated: true,
  },
  {
    id: "e2-3",
    source: "2",
    sourceHandle: "bottom-source",
    target: "3",
    targetHandle: "top-target",
    type: "bride-groom",
    style: { stroke: "var(--primary)", strokeWidth: 1 },
    animated: true,
  },
  {
    id: "e3-4",
    source: "3",
    sourceHandle: "bottom-source",
    target: "4",
    targetHandle: "top-target",
    type: "bride",
    style: { stroke: "var(--primary)", strokeWidth: 1 },
  },
  {
    id: "e4-5",
    source: "5",
    sourceHandle: "top-source",
    target: "4",
    targetHandle: "bottom-target",
    type: "bride-groom",
    style: { stroke: "var(--primary)", strokeWidth: 1 },
    animated: true,
  },
  {
    id: "e5-6",
    source: "6",
    sourceHandle: "top-source",
    target: "4",
    targetHandle: "bottom-target",
    type: "bride-groom",
    style: { stroke: "var(--primary)", strokeWidth: 1 },
    animated: true,
  },
]

export function BrideGroomEdges({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })
  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={style}
        label={labelX}
        labelY={labelY}
      />
    </>
  )
}

export function BrideEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })
  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={style}
        label={labelX}
        labelY={labelY}
      >
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
            }}
            className="bg-primary text-background rounded-full p-1.5"
          >
            <HeartIcon weight="fill" />
          </div>
        </EdgeLabelRenderer>
      </BaseEdge>
    </>
  )
}

const edgeTypes = {
  "bride-groom": BrideGroomEdges,
  bride: BrideEdge,
}

const FitViewOptions: FitViewOptions = {
  duration: 0,
}

const proOptions = { hideAttribution: true }

export function BrideGroomChart() {
  const [nodes] = useNodesState(initialNodes)
  const [edges] = useEdgesState(initialEdges)
  return (
    <div className="md:h-[500px] h-[400px] w-full">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        edgeTypes={edgeTypes}
        fitView
        panOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
        draggable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        fitViewOptions={FitViewOptions}
        proOptions={proOptions}
      />
    </div>
  )
}
