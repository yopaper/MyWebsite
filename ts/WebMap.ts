
class MapHandler{
    protected canvas:HTMLCanvasElement;

}//=====================================================

class MapNode{
    protected pos:{x:number, y:number};
    protected linkedNodes : MapNode[] = [];
    constructor( pos:{x:number, y:number}, ...link:MapNode[] ){
        this.pos = pos;
        this.linkedNodes = [];
        for(var i=0; i<link.length; i++){
            this.link( link[i] );
        }
    }//--------------------------------------------------
    public link(node:MapNode) {
        if( !this.linkedNodes.includes(node) ){
            this.linkedNodes.push( node );
            node.link( this );
        }
    }//--------------------------------------------------
}//======================================================