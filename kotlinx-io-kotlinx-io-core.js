(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    globalThis['kotlinx-io-kotlinx-io-core'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var subtract = kotlin_kotlin.$_$.ca;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var charArrayOf = kotlin_kotlin.$_$.ia;
  var protoOf = kotlin_kotlin.$_$.xb;
  var toString = kotlin_kotlin.$_$.ac;
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var toShort = kotlin_kotlin.$_$.zb;
  var add = kotlin_kotlin.$_$.o9;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var fromInt = kotlin_kotlin.$_$.t9;
  var convertToInt = kotlin_kotlin.$_$.q9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.z3;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var VOID = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var UnsafeByteStringOperations_instance = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.a;
  var AutoCloseable = kotlin_kotlin.$_$.jf;
  var objectCreate = kotlin_kotlin.$_$.wb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var arrayCopy = kotlin_kotlin.$_$.v5;
  var toByte = kotlin_kotlin.$_$.yb;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.j4;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var multiply = kotlin_kotlin.$_$.w9;
  var charCodeAt = kotlin_kotlin.$_$.ka;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var charArray = kotlin_kotlin.$_$.ja;
  var numberToChar = kotlin_kotlin.$_$.ub;
  var concatToString = kotlin_kotlin.$_$.dd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.e4;
  var captureStack = kotlin_kotlin.$_$.ha;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.f4;
  var Exception_init_$Init$_1 = kotlin_kotlin.$_$.h4;
  var Exception = kotlin_kotlin.$_$.sf;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
  function write$default(source, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? source.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.a1j(source, startIndex, endIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.a1j.call(this, source, startIndex, endIndex);
    }
    return tmp;
  }
  initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
  initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Segment, 'Segment');
  initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
  initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
  initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
  initMetadataForClass(SegmentReadContextImpl$1);
  initMetadataForClass(SegmentWriteContextImpl$1);
  initMetadataForClass(BufferIterationContextImpl$1);
  initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
  initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
  initMetadataForObject(SegmentPool, 'SegmentPool');
  //endregion
  function get_HEX_DIGIT_CHARS() {
    _init_properties__Util_kt__g8tcl9();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function checkBounds(size, startIndex, endIndex) {
    _init_properties__Util_kt__g8tcl9();
    if (startIndex < 0n || endIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
    if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
    }
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties__Util_kt__g8tcl9();
    if (offset < 0n || offset > size || subtract(size, offset) < byteCount || byteCount < 0n) {
      throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
  }
  var properties_initialized__Util_kt_67kc5b;
  function _init_properties__Util_kt__g8tcl9() {
    if (!properties_initialized__Util_kt_67kc5b) {
      properties_initialized__Util_kt_67kc5b = true;
      // Inline function 'kotlin.charArrayOf' call
      HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
    }
  }
  function throwEof($this, byteCount) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.e1().toString() + ', required: ' + byteCount.toString() + ')');
  }
  function Buffer() {
    this.n1h_1 = null;
    this.o1h_1 = null;
    this.p1h_1 = 0n;
  }
  protoOf(Buffer).e1 = function () {
    return this.p1h_1;
  };
  protoOf(Buffer).q1h = function () {
    return this;
  };
  protoOf(Buffer).r1h = function () {
    return this.e1() === 0n;
  };
  protoOf(Buffer).s1h = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.e1() < byteCount) {
      throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.e1().toString() + ', required: ' + byteCount.toString() + ')');
    }
  };
  protoOf(Buffer).t1h = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.e1() >= byteCount;
  };
  protoOf(Buffer).u1h = function () {
    var tmp0_elvis_lhs = this.n1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 1n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.e1();
    if (segmentSize === 0) {
      this.c1i();
      return this.u1h();
    }
    var v = segment.d1i();
    this.p1h_1 = subtract(this.p1h_1, 1n);
    if (segmentSize === 1) {
      this.c1i();
    }
    return v;
  };
  protoOf(Buffer).e1i = function () {
    var tmp0_elvis_lhs = this.n1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 2n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.e1();
    if (segmentSize < 2) {
      this.s1h(2n);
      if (segmentSize === 0) {
        this.c1i();
        return this.e1i();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.u1h() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.u1h() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.f1i();
    this.p1h_1 = subtract(this.p1h_1, 2n);
    if (segmentSize === 2) {
      this.c1i();
    }
    return v;
  };
  protoOf(Buffer).g1i = function () {
    return Unit_instance;
  };
  protoOf(Buffer).h1i = function (out, startIndex, endIndex) {
    checkBounds(this.e1(), startIndex, endIndex);
    if (startIndex === endIndex)
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.p1h_1 = add(out.p1h_1, remainingByteCount);
    var s = this.n1h_1;
    while (currentOffset >= fromInt(ensureNotNull(s).x1h_1 - s.w1h_1 | 0)) {
      currentOffset = subtract(currentOffset, fromInt(s.x1h_1 - s.w1h_1 | 0));
      s = s.a1i_1;
    }
    while (remainingByteCount > 0n) {
      var copy = ensureNotNull(s).i1i();
      copy.w1h_1 = copy.w1h_1 + convertToInt(currentOffset) | 0;
      var tmp = copy;
      var tmp0 = copy.w1h_1 + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.x1h_1;
      tmp.x1h_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.n1h_1 == null) {
        out.n1h_1 = copy;
        out.o1h_1 = copy;
      } else if (false) {
        out.o1h_1 = ensureNotNull(out.o1h_1).j1i(copy).k1i();
        if (ensureNotNull(out.o1h_1).b1i_1 == null) {
          out.n1h_1 = out.o1h_1;
        }
      } else {
        out.o1h_1 = ensureNotNull(out.o1h_1).j1i(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.x1h_1 - copy.w1h_1 | 0));
      currentOffset = 0n;
      s = s.a1i_1;
    }
  };
  protoOf(Buffer).l1i = function () {
    var result = this.e1();
    if (result === 0n)
      return 0n;
    var tail = ensureNotNull(this.o1h_1);
    if (tail.x1h_1 < 8192 && tail.z1h_1) {
      result = subtract(result, fromInt(tail.x1h_1 - tail.w1h_1 | 0));
    }
    return result;
  };
  protoOf(Buffer).m1i = function (position) {
    if (position < 0n || position >= this.e1()) {
      throw IndexOutOfBoundsException_init_$Create$('position (' + position.toString() + ') is not within the range [0..size(' + this.e1().toString() + '))');
    }
    if (position === 0n) {
      return ensureNotNull(this.n1h_1).n1i(0);
    }
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (this.n1h_1 == null) {
        return ensureNotNull(null).n1i(convertToInt(subtract(position, -1n)));
      }
      if (subtract(this.e1(), position) < position) {
        var s = this.o1h_1;
        var offset = this.e1();
        $l$loop: while (!(s == null) && offset > position) {
          offset = subtract(offset, fromInt(s.x1h_1 - s.w1h_1 | 0));
          if (offset <= position)
            break $l$loop;
          s = s.b1i_1;
        }
        var tmp0 = s;
        var offset_0 = offset;
        return ensureNotNull(tmp0).n1i(convertToInt(subtract(position, offset_0)));
      } else {
        var s_0 = this.n1h_1;
        var offset_1 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_0 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other = s_0.x1h_1 - s_0.w1h_1 | 0;
          var nextOffset = add(tmp0_0, fromInt(other));
          if (nextOffset > position)
            break $l$loop_0;
          s_0 = s_0.a1i_1;
          offset_1 = nextOffset;
        }
        var tmp0_1 = s_0;
        var offset_2 = offset_1;
        return ensureNotNull(tmp0_1).n1i(convertToInt(subtract(position, offset_2)));
      }
    }
  };
  protoOf(Buffer).w2 = function () {
    return this.o1i(this.e1());
  };
  protoOf(Buffer).o1i = function (byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var tmp0_elvis_lhs = this.n1h_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.x1h_1 - head.w1h_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$3 = tmp0 <= b_0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$3);
      this.p1h_1 = subtract(this.p1h_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.w1h_1 = head.w1h_1 + toSkip | 0;
      if (head.w1h_1 === head.x1h_1) {
        this.c1i();
      }
    }
  };
  protoOf(Buffer).p1i = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.n1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.e1();
    var toCopy = Math.min(tmp0, b);
    s.q1i(sink, startIndex, startIndex + toCopy | 0);
    this.p1h_1 = subtract(this.p1h_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.c1i();
    }
    return toCopy;
  };
  protoOf(Buffer).r1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.e1() === 0n)
      return -1n;
    var bytesWritten = byteCount > this.e1() ? this.e1() : byteCount;
    sink.s1i(this, bytesWritten);
    return bytesWritten;
  };
  protoOf(Buffer).t1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.e1() < byteCount) {
      sink.s1i(this, this.e1());
      throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.e1().toString() + ' bytes were written.');
    }
    sink.s1i(this, byteCount);
  };
  protoOf(Buffer).u1i = function (sink) {
    var byteCount = this.e1();
    if (byteCount > 0n) {
      sink.s1i(this, byteCount);
    }
    return byteCount;
  };
  protoOf(Buffer).v1i = function () {
    return buffered(new PeekSource(this));
  };
  protoOf(Buffer).w1i = function (minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.o1h_1 == null) {
      var result = SegmentPool_instance.z1i();
      this.n1h_1 = result;
      this.o1h_1 = result;
      return result;
    }
    var t = ensureNotNull(this.o1h_1);
    if ((t.x1h_1 + minimumCapacity | 0) > 8192 || !t.z1h_1) {
      var newTail = t.j1i(SegmentPool_instance.z1i());
      this.o1h_1 = newTail;
      return newTail;
    }
    return t;
  };
  protoOf(Buffer).a1j = function (source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.w1i(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.b1j();
      var toCopy = Math.min(tmp0, b);
      tail.c1j(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.p1h_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.p1h_1 = add(tmp0_0, fromInt(other));
  };
  protoOf(Buffer).e1j = function (source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var read = source.r1i(this, remainingByteCount);
      if (read === -1n) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + subtract(byteCount, remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = subtract(remainingByteCount, read);
    }
  };
  protoOf(Buffer).s1i = function (source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.p1h_1, 0n, byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      if (remainingByteCount < fromInt(ensureNotNull(source.n1h_1).e1())) {
        var tail = this.o1h_1;
        var tmp;
        if (!(tail == null) && tail.z1h_1) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.x1h_1;
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.f1j() ? 0 : tail.w1h_1;
          tmp = subtract(tmp0_0, fromInt(other_0)) <= 8192n;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.n1h_1).h1j(tail, convertToInt(remainingByteCount));
          source.p1h_1 = subtract(source.p1h_1, remainingByteCount);
          this.p1h_1 = add(this.p1h_1, remainingByteCount);
          return Unit_instance;
        } else {
          source.n1h_1 = ensureNotNull(source.n1h_1).g1j(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.n1h_1);
      var movedByteCount = fromInt(segmentToMove.e1());
      source.n1h_1 = segmentToMove.i1j();
      if (source.n1h_1 == null) {
        source.o1h_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.n1h_1 == null) {
        this.n1h_1 = segmentToMove;
        this.o1h_1 = segmentToMove;
      } else if (true) {
        this.o1h_1 = ensureNotNull(this.o1h_1).j1i(segmentToMove).k1i();
        if (ensureNotNull(this.o1h_1).b1i_1 == null) {
          this.n1h_1 = this.o1h_1;
        }
      } else {
        this.o1h_1 = ensureNotNull(this.o1h_1).j1i(segmentToMove);
      }
      source.p1h_1 = subtract(source.p1h_1, movedByteCount);
      this.p1h_1 = add(this.p1h_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  };
  protoOf(Buffer).j1j = function (source) {
    var totalBytesRead = 0n;
    $l$loop: while (true) {
      var readCount = source.r1i(this, 8192n);
      if (readCount === -1n)
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).k1j = function (byte) {
    this.w1i(1).l1j(byte);
    this.p1h_1 = add(this.p1h_1, 1n);
  };
  protoOf(Buffer).m1j = function (short) {
    this.w1i(2).n1j(short);
    this.p1h_1 = add(this.p1h_1, 2n);
  };
  protoOf(Buffer).g4 = function () {
    return Unit_instance;
  };
  protoOf(Buffer).toString = function () {
    if (this.e1() === 0n)
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$0 = a <= b ? a : b;
    var len = convertToInt(tmp$ret$0);
    var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.e1() > fromInt(maxPrintableBytes) ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.n1h_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.e1()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.o1j(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$4 = b_0 >> 4;
        var tmp_0 = builder.s(tmp[tmp$ret$4 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$5 = b_0 & 15;
        tmp_0.s(tmp_1[tmp$ret$5]);
      }
      curr = curr.a1i_1;
    }
    if (this.e1() > fromInt(maxPrintableBytes)) {
      builder.s(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.e1().toString() + ' hex=' + builder.toString() + ')';
  };
  protoOf(Buffer).c1i = function () {
    var oldHead = ensureNotNull(this.n1h_1);
    var nextHead = oldHead.a1i_1;
    this.n1h_1 = nextHead;
    if (nextHead == null) {
      this.o1h_1 = null;
    } else {
      nextHead.b1i_1 = null;
    }
    oldHead.a1i_1 = null;
    SegmentPool_instance.p1j(oldHead);
  };
  protoOf(Buffer).q1j = function () {
    var oldTail = ensureNotNull(this.o1h_1);
    var newTail = oldTail.b1i_1;
    this.o1h_1 = newTail;
    if (newTail == null) {
      this.n1h_1 = null;
    } else {
      newTail.a1i_1 = null;
    }
    oldTail.b1i_1 = null;
    SegmentPool_instance.p1j(oldTail);
  };
  function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0n : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.e1() : endIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.e1();
    var endOffset = endIndex <= b ? endIndex : b;
    checkBounds(_this__u8e3s4.e1(), startIndex, endOffset);
    if (startIndex === endOffset)
      return -1n;
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (_this__u8e3s4.n1h_1 == null) {
        if (-1n === -1n) {
          return -1n;
        }
        var segment = null;
        var offset = -1n;
        do {
          // Inline function 'kotlin.check' call
          if (!(endOffset > offset)) {
            throw IllegalStateException_init_$Create$('Check failed.');
          }
          ensureNotNull(segment);
          var tmp = segment;
          // Inline function 'kotlin.comparisons.maxOf' call
          var a = convertToInt(subtract(startIndex, offset));
          var tmp_0 = Math.max(a, 0);
          var tmp0 = segment.e1();
          // Inline function 'kotlin.comparisons.minOf' call
          var b_0 = convertToInt(subtract(endOffset, offset));
          var tmp$ret$5 = Math.min(tmp0, b_0);
          var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$5);
          if (!(idx === -1)) {
            return add(offset, fromInt(idx));
          }
          var tmp0_0 = offset;
          // Inline function 'kotlin.Long.plus' call
          var other = segment.e1();
          offset = add(tmp0_0, fromInt(other));
          segment = segment.a1i_1;
        }
         while (!(segment == null) && offset < endOffset);
        return -1n;
      }
      if (subtract(_this__u8e3s4.e1(), startIndex) < startIndex) {
        var s = _this__u8e3s4.o1h_1;
        var offset_0 = _this__u8e3s4.e1();
        $l$loop: while (!(s == null) && offset_0 > startIndex) {
          offset_0 = subtract(offset_0, fromInt(s.x1h_1 - s.w1h_1 | 0));
          if (offset_0 <= startIndex)
            break $l$loop;
          s = s.b1i_1;
        }
        var tmp0_1 = s;
        var o = offset_0;
        if (o === -1n) {
          return -1n;
        }
        var segment_0 = tmp0_1;
        var offset_1 = o;
        do {
          // Inline function 'kotlin.check' call
          if (!(endOffset > offset_1)) {
            throw IllegalStateException_init_$Create$('Check failed.');
          }
          ensureNotNull(segment_0);
          var tmp_1 = segment_0;
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_0 = convertToInt(subtract(startIndex, offset_1));
          var tmp_2 = Math.max(a_0, 0);
          var tmp0_2 = segment_0.e1();
          // Inline function 'kotlin.comparisons.minOf' call
          var b_1 = convertToInt(subtract(endOffset, offset_1));
          var tmp$ret$10 = Math.min(tmp0_2, b_1);
          var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$10);
          if (!(idx_0 === -1)) {
            return add(offset_1, fromInt(idx_0));
          }
          var tmp0_3 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other_0 = segment_0.e1();
          offset_1 = add(tmp0_3, fromInt(other_0));
          segment_0 = segment_0.a1i_1;
        }
         while (!(segment_0 == null) && offset_1 < endOffset);
        return -1n;
      } else {
        var s_0 = _this__u8e3s4.n1h_1;
        var offset_2 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_4 = offset_2;
          // Inline function 'kotlin.Long.plus' call
          var other_1 = s_0.x1h_1 - s_0.w1h_1 | 0;
          var nextOffset = add(tmp0_4, fromInt(other_1));
          if (nextOffset > startIndex)
            break $l$loop_0;
          s_0 = s_0.a1i_1;
          offset_2 = nextOffset;
        }
        var tmp0_5 = s_0;
        var o_0 = offset_2;
        if (o_0 === -1n) {
          return -1n;
        }
        var segment_1 = tmp0_5;
        var offset_3 = o_0;
        do {
          // Inline function 'kotlin.check' call
          if (!(endOffset > offset_3)) {
            throw IllegalStateException_init_$Create$('Check failed.');
          }
          ensureNotNull(segment_1);
          var tmp_3 = segment_1;
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_1 = convertToInt(subtract(startIndex, offset_3));
          var tmp_4 = Math.max(a_1, 0);
          var tmp0_6 = segment_1.e1();
          // Inline function 'kotlin.comparisons.minOf' call
          var b_2 = convertToInt(subtract(endOffset, offset_3));
          var tmp$ret$16 = Math.min(tmp0_6, b_2);
          var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$16);
          if (!(idx_1 === -1)) {
            return add(offset_3, fromInt(idx_1));
          }
          var tmp0_7 = offset_3;
          // Inline function 'kotlin.Long.plus' call
          var other_2 = segment_1.e1();
          offset_3 = add(tmp0_7, fromInt(other_2));
          segment_1 = segment_1.a1i_1;
        }
         while (!(segment_1 == null) && offset_3 < endOffset);
        return -1n;
      }
    }
  }
  function readByteString(_this__u8e3s4, byteCount) {
    return UnsafeByteStringOperations_instance.m1h(readByteArray_0(_this__u8e3s4, byteCount));
  }
  function buffered(_this__u8e3s4) {
    return new RealSource(_this__u8e3s4);
  }
  function PeekSource(upstream) {
    this.r1j_1 = upstream;
    this.s1j_1 = this.r1j_1.q1h();
    this.t1j_1 = this.s1j_1.n1h_1;
    var tmp = this;
    var tmp0_safe_receiver = this.s1j_1.n1h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1h_1;
    tmp.u1j_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.v1j_1 = false;
    this.w1j_1 = 0n;
  }
  protoOf(PeekSource).r1i = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.v1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.t1j_1 == null || (this.t1j_1 === this.s1j_1.n1h_1 && this.u1j_1 === ensureNotNull(this.s1j_1.n1h_1).w1h_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (byteCount === 0n)
      return 0n;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.w1j_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.r1j_1.t1h(tmp$ret$7))
      return -1n;
    if (this.t1j_1 == null && !(this.s1j_1.n1h_1 == null)) {
      this.t1j_1 = this.s1j_1.n1h_1;
      this.u1j_1 = ensureNotNull(this.s1j_1.n1h_1).w1h_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.s1j_1.e1(), this.w1j_1);
    var toCopy = byteCount <= b ? byteCount : b;
    this.s1j_1.h1i(sink, this.w1j_1, add(this.w1j_1, toCopy));
    this.w1j_1 = add(this.w1j_1, toCopy);
    return toCopy;
  };
  protoOf(PeekSource).g4 = function () {
    this.v1j_1 = true;
  };
  function RealSource(source) {
    this.x1j_1 = source;
    this.y1j_1 = false;
    this.z1j_1 = new Buffer();
  }
  protoOf(RealSource).q1h = function () {
    return this.z1j_1;
  };
  protoOf(RealSource).r1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.y1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (this.z1j_1.e1() === 0n) {
      var read = this.x1j_1.r1i(this.z1j_1, 8192n);
      if (read === -1n)
        return -1n;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.z1j_1.e1();
    var toRead = byteCount <= b ? byteCount : b;
    return this.z1j_1.r1i(sink, toRead);
  };
  protoOf(RealSource).r1h = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.y1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.z1j_1.r1h() && this.x1j_1.r1i(this.z1j_1, 8192n) === -1n;
  };
  protoOf(RealSource).s1h = function (byteCount) {
    if (!this.t1h(byteCount))
      throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  };
  protoOf(RealSource).t1h = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.y1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (this.z1j_1.e1() < byteCount) {
      if (this.x1j_1.r1i(this.z1j_1, 8192n) === -1n)
        return false;
    }
    return true;
  };
  protoOf(RealSource).u1h = function () {
    this.s1h(1n);
    return this.z1j_1.u1h();
  };
  protoOf(RealSource).p1i = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (this.z1j_1.e1() === 0n) {
      var read = this.x1j_1.r1i(this.z1j_1, 8192n);
      if (read === -1n)
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.z1j_1.e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$1 = a <= b ? a : b;
    var toRead = convertToInt(tmp$ret$1);
    return this.z1j_1.p1i(sink, startIndex, startIndex + toRead | 0);
  };
  protoOf(RealSource).t1i = function (sink, byteCount) {
    try {
      this.s1h(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.s1i(this.z1j_1, this.z1j_1.e1());
        throw e;
      } else {
        throw $p;
      }
    }
    this.z1j_1.t1i(sink, byteCount);
  };
  protoOf(RealSource).u1i = function (sink) {
    var totalBytesWritten = 0n;
    while (!(this.x1j_1.r1i(this.z1j_1, 8192n) === -1n)) {
      var emitByteCount = this.z1j_1.l1i();
      if (emitByteCount > 0n) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.s1i(this.z1j_1, emitByteCount);
      }
    }
    if (this.z1j_1.e1() > 0n) {
      totalBytesWritten = add(totalBytesWritten, this.z1j_1.e1());
      sink.s1i(this.z1j_1, this.z1j_1.e1());
    }
    return totalBytesWritten;
  };
  protoOf(RealSource).e1i = function () {
    this.s1h(2n);
    return this.z1j_1.e1i();
  };
  protoOf(RealSource).v1i = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.y1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return buffered(new PeekSource(this));
  };
  protoOf(RealSource).g4 = function () {
    if (this.y1j_1)
      return Unit_instance;
    this.y1j_1 = true;
    this.x1j_1.g4();
    this.z1j_1.w2();
  };
  protoOf(RealSource).toString = function () {
    return 'buffered(' + toString(this.x1j_1) + ')';
  };
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.v1h_1 = new Int8Array(8192);
    $this.z1h_1 = true;
    $this.y1h_1 = null;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
    Segment.call($this);
    $this.v1h_1 = data;
    $this.w1h_1 = pos;
    $this.x1h_1 = limit;
    $this.y1h_1 = shareToken;
    $this.z1h_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.a1k_1 = 8192;
    this.b1k_1 = 1024;
  }
  protoOf(Companion).c1k = function () {
    return Segment_init_$Create$();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).f1j = function () {
    var tmp0_safe_receiver = this.y1h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1k();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Segment).i1i = function () {
    var tmp0_elvis_lhs = this.y1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.e1k();
      this.y1h_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.w1h_1;
    var tmp_1 = this.x1h_1;
    // Inline function 'kotlin.also' call
    t.f1k();
    return Segment_init_$Create$_0(this.v1h_1, tmp_0, tmp_1, t, false);
  };
  protoOf(Segment).i1j = function () {
    var result = this.a1i_1;
    if (!(this.b1i_1 == null)) {
      ensureNotNull(this.b1i_1).a1i_1 = this.a1i_1;
    }
    if (!(this.a1i_1 == null)) {
      ensureNotNull(this.a1i_1).b1i_1 = this.b1i_1;
    }
    this.a1i_1 = null;
    this.b1i_1 = null;
    return result;
  };
  protoOf(Segment).j1i = function (segment) {
    segment.b1i_1 = this;
    segment.a1i_1 = this.a1i_1;
    if (!(this.a1i_1 == null)) {
      ensureNotNull(this.a1i_1).b1i_1 = segment;
    }
    this.a1i_1 = segment;
    return segment;
  };
  protoOf(Segment).g1j = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.x1h_1 - this.w1h_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.i1i();
    } else {
      prefix = SegmentPool_instance.z1i();
      var tmp0 = this.v1h_1;
      var tmp2 = prefix.v1h_1;
      var tmp5 = this.w1h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.w1h_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
    }
    prefix.x1h_1 = prefix.w1h_1 + byteCount | 0;
    this.w1h_1 = this.w1h_1 + byteCount | 0;
    if (!(this.b1i_1 == null)) {
      ensureNotNull(this.b1i_1).j1i(prefix);
    } else {
      prefix.a1i_1 = this;
      this.b1i_1 = prefix;
    }
    return prefix;
  };
  protoOf(Segment).k1i = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.b1i_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.b1i_1).z1h_1)
      return this;
    var byteCount = this.x1h_1 - this.w1h_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.b1i_1).x1h_1 | 0) + (ensureNotNull(this.b1i_1).f1j() ? 0 : ensureNotNull(this.b1i_1).w1h_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.b1i_1;
    this.h1j(ensureNotNull(predecessor), byteCount);
    var successor = this.i1j();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    SegmentPool_instance.p1j(this);
    return predecessor;
  };
  protoOf(Segment).l1j = function (byte) {
    var _unary__edvuaz = this.x1h_1;
    this.x1h_1 = _unary__edvuaz + 1 | 0;
    this.v1h_1[_unary__edvuaz] = byte;
  };
  protoOf(Segment).n1j = function (short) {
    var data = this.v1h_1;
    var limit = this.x1h_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.x1h_1 = limit;
  };
  protoOf(Segment).d1i = function () {
    var _unary__edvuaz = this.w1h_1;
    this.w1h_1 = _unary__edvuaz + 1 | 0;
    return this.v1h_1[_unary__edvuaz];
  };
  protoOf(Segment).f1i = function () {
    var data = this.v1h_1;
    var pos = this.w1h_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.w1h_1 = pos;
    return s;
  };
  protoOf(Segment).h1j = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.z1h_1) {
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.x1h_1 + byteCount | 0) > 8192) {
      if (sink.f1j())
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.x1h_1 + byteCount | 0) - sink.w1h_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp0 = sink.v1h_1;
      var tmp2 = sink.v1h_1;
      var tmp5 = sink.w1h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.x1h_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
      sink.x1h_1 = sink.x1h_1 - sink.w1h_1 | 0;
      sink.w1h_1 = 0;
    }
    var tmp0_0 = this.v1h_1;
    var tmp2_0 = sink.v1h_1;
    var tmp4 = sink.x1h_1;
    var tmp6 = this.w1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.w1h_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4, tmp6, endIndex_0);
    sink.x1h_1 = sink.x1h_1 + byteCount | 0;
    this.w1h_1 = this.w1h_1 + byteCount | 0;
  };
  protoOf(Segment).q1i = function (dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.v1h_1;
    var tmp6 = this.w1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.w1h_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.w1h_1 = this.w1h_1 + len | 0;
  };
  protoOf(Segment).c1j = function (src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.v1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.x1h_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.x1h_1 = this.x1h_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  };
  protoOf(Segment).e1 = function () {
    return this.x1h_1 - this.w1h_1 | 0;
  };
  protoOf(Segment).b1j = function () {
    return this.v1h_1.length - this.x1h_1 | 0;
  };
  protoOf(Segment).g1k = function (readOnly) {
    return this.v1h_1;
  };
  protoOf(Segment).n1i = function (index) {
    return this.v1h_1[this.w1h_1 + index | 0];
  };
  protoOf(Segment).h1k = function (index, value) {
    this.v1h_1[this.x1h_1 + index | 0] = value;
  };
  protoOf(Segment).i1k = function (index, b0, b1) {
    var d = this.v1h_1;
    var l = this.x1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  };
  protoOf(Segment).j1k = function (index, b0, b1, b2) {
    var d = this.v1h_1;
    var l = this.x1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  };
  protoOf(Segment).k1k = function (index, b0, b1, b2, b3) {
    var d = this.v1h_1;
    var l = this.x1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  };
  function Segment() {
    this.w1h_1 = 0;
    this.x1h_1 = 0;
    this.y1h_1 = null;
    this.z1h_1 = false;
    this.a1i_1 = null;
    this.b1i_1 = null;
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.e1() === 0;
  }
  function SegmentCopyTracker() {
  }
  function AlwaysSharedCopyTracker() {
    AlwaysSharedCopyTracker_instance = this;
    SegmentCopyTracker.call(this);
  }
  protoOf(AlwaysSharedCopyTracker).d1k = function () {
    return true;
  };
  protoOf(AlwaysSharedCopyTracker).f1k = function () {
    return Unit_instance;
  };
  var AlwaysSharedCopyTracker_instance;
  function AlwaysSharedCopyTracker_getInstance() {
    if (AlwaysSharedCopyTracker_instance == null)
      new AlwaysSharedCopyTracker();
    return AlwaysSharedCopyTracker_instance;
  }
  function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
    // Inline function 'kotlin.require' call
    if (!(0 <= startOffset ? startOffset < _this__u8e3s4.e1() : false)) {
      var message = '' + startOffset;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.e1() : false)) {
      var message_0 = '' + endOffset;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var p = _this__u8e3s4.w1h_1;
    var data = _this__u8e3s4.g1k(true);
    var inductionVariable = startOffset;
    if (inductionVariable < endOffset)
      do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (data[p + idx | 0] === byte) {
          return idx;
        }
      }
       while (inductionVariable < endOffset);
    return -1;
  }
  function Sink() {
  }
  function Source() {
  }
  function readByteArray(_this__u8e3s4) {
    return readByteArrayImpl(_this__u8e3s4, -1);
  }
  function readByteArray_0(_this__u8e3s4, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    var byteCount_0 = fromInt(byteCount);
    // Inline function 'kotlin.require' call
    if (!(byteCount_0 >= 0n)) {
      var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return readByteArrayImpl(_this__u8e3s4, byteCount);
  }
  function indexOf_1(_this__u8e3s4, byte, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0n : startIndex;
    endIndex = endIndex === VOID ? 9223372036854775807n : endIndex;
    // Inline function 'kotlin.require' call
    if (!(0n <= startIndex ? startIndex <= endIndex : false)) {
      var tmp;
      if (endIndex < 0n) {
        tmp = 'startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') should be non negative';
      } else {
        tmp = 'startIndex (' + startIndex.toString() + ') is not within the range [0..endIndex(' + endIndex.toString() + '))';
      }
      var message = tmp;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === endIndex)
      return -1n;
    var offset = startIndex;
    $l$loop: while (true) {
      var tmp_0;
      if (offset < endIndex) {
        // Inline function 'kotlin.Long.plus' call
        var this_0 = offset;
        var tmp$ret$2 = add(this_0, fromInt(1));
        tmp_0 = _this__u8e3s4.t1h(tmp$ret$2);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      var tmp_1 = _this__u8e3s4.q1h();
      var tmp_2 = offset;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = _this__u8e3s4.q1h().e1();
      var tmp$ret$3 = endIndex <= b ? endIndex : b;
      var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
      if (!(idx === -1n)) {
        return idx;
      }
      offset = _this__u8e3s4.q1h().e1();
    }
    return -1n;
  }
  function readByteArrayImpl(_this__u8e3s4, size) {
    var arraySize = size;
    if (size === -1) {
      var fetchSize = 2147483647n;
      while (_this__u8e3s4.q1h().e1() < 2147483647n && _this__u8e3s4.t1h(fetchSize)) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = fetchSize;
        fetchSize = multiply(this_0, fromInt(2));
      }
      // Inline function 'kotlin.check' call
      if (!(_this__u8e3s4.q1h().e1() < 2147483647n)) {
        var message = "Can't create an array of size " + _this__u8e3s4.q1h().e1().toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      arraySize = convertToInt(_this__u8e3s4.q1h().e1());
    } else {
      _this__u8e3s4.s1h(fromInt(size));
    }
    var array = new Int8Array(arraySize);
    readTo(_this__u8e3s4.q1h(), array);
    return array;
  }
  function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? sink.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var offset = startIndex;
    while (offset < endIndex) {
      var bytesRead = _this__u8e3s4.p1i(sink, offset, endIndex);
      if (bytesRead === -1) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
      }
      offset = offset + bytesRead | 0;
    }
  }
  function readString(_this__u8e3s4, byteCount) {
    _this__u8e3s4.s1h(byteCount);
    return commonReadUtf8(_this__u8e3s4.q1h(), byteCount);
  }
  function readString_0(_this__u8e3s4) {
    return commonReadUtf8(_this__u8e3s4, _this__u8e3s4.e1());
  }
  function readString_1(_this__u8e3s4) {
    _this__u8e3s4.t1h(9223372036854775807n);
    return commonReadUtf8(_this__u8e3s4.q1h(), _this__u8e3s4.q1h().e1());
  }
  function writeString(_this__u8e3s4, string, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? string.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = string.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    // Inline function 'kotlinx.io.writeToInternalBuffer' call
    // Inline function 'kotlinx.io.commonWriteUtf8' call
    var this_0 = _this__u8e3s4.q1h();
    var i = startIndex;
    while (i < endIndex) {
      var p0 = i;
      // Inline function 'kotlin.code' call
      var this_1 = charCodeAt(string, p0);
      var c = Char__toInt_impl_vasixd(this_1);
      if (c < 128) {
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = this_0.w1i(1);
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.b1j() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.o1k(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            var p0_0 = i;
            // Inline function 'kotlin.code' call
            var this_2 = charCodeAt(string, p0_0);
            c = Char__toInt_impl_vasixd(this_2);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.o1k(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.x1h_1 = tail.x1h_1 + bytesWritten | 0;
            var tmp = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_3 = this_0.p1h_1;
            tmp.p1h_1 = add(this_3, fromInt(bytesWritten));
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.b1j() : false)) {
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.b1j();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.x1h_1 = tail.x1h_1 + bytesWritten | 0;
            var tmp_0 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_4 = this_0.p1h_1;
            tmp_0.p1h_1 = add(this_4, fromInt(bytesWritten));
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            this_0.q1j();
          }
        }
      } else if (c < 2048) {
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = this_0.w1i(2);
          get_SegmentWriteContextImpl().n1k(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.x1h_1 = tail_0.x1h_1 + bytesWritten_0 | 0;
            var tmp_1 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_5 = this_0.p1h_1;
            tmp_1.p1h_1 = add(this_5, fromInt(bytesWritten_0));
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.b1j() : false)) {
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.b1j();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.x1h_1 = tail_0.x1h_1 + bytesWritten_0 | 0;
            var tmp_2 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_6 = this_0.p1h_1;
            tmp_2.p1h_1 = add(this_6, fromInt(bytesWritten_0));
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            this_0.q1j();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = this_0.w1i(3);
          get_SegmentWriteContextImpl().m1k(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.x1h_1 = tail_1.x1h_1 + bytesWritten_1 | 0;
            var tmp_3 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_7 = this_0.p1h_1;
            tmp_3.p1h_1 = add(this_7, fromInt(bytesWritten_1));
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.b1j() : false)) {
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.b1j();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.x1h_1 = tail_1.x1h_1 + bytesWritten_1 | 0;
            var tmp_4 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_8 = this_0.p1h_1;
            tmp_4.p1h_1 = add(this_8, fromInt(bytesWritten_1));
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            this_0.q1j();
          }
        }
        i = i + 1 | 0;
      } else {
        var tmp_5;
        if ((i + 1 | 0) < endIndex) {
          var p0_1 = i + 1 | 0;
          // Inline function 'kotlin.code' call
          var this_9 = charCodeAt(string, p0_1);
          tmp_5 = Char__toInt_impl_vasixd(this_9);
        } else {
          tmp_5 = 0;
        }
        var low = tmp_5;
        if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
          // Inline function 'kotlin.code' call
          var this_10 = _Char___init__impl__6a9atx(63);
          var tmp$ret$29 = Char__toInt_impl_vasixd(this_10);
          this_0.k1j(toByte(tmp$ret$29));
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = this_0.w1i(4);
            get_SegmentWriteContextImpl().l1k(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.x1h_1 = tail_2.x1h_1 + bytesWritten_2 | 0;
              var tmp_6 = this_0;
              // Inline function 'kotlin.Long.plus' call
              var this_11 = this_0.p1h_1;
              tmp_6.p1h_1 = add(this_11, fromInt(bytesWritten_2));
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.b1j() : false)) {
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.b1j();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.x1h_1 = tail_2.x1h_1 + bytesWritten_2 | 0;
              var tmp_7 = this_0;
              // Inline function 'kotlin.Long.plus' call
              var this_12 = this_0.p1h_1;
              tmp_7.p1h_1 = add(this_12, fromInt(bytesWritten_2));
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              this_0.q1j();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
    _this__u8e3s4.g1i();
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    if (byteCount === 0n)
      return '';
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = _this__u8e3s4.n1h_1;
    while (!(curr == null)) {
      get_SegmentReadContextImpl();
      if (fromInt(curr.e1()) >= byteCount) {
        var result = '';
        // Inline function 'kotlinx.io.unsafe.withData' call
        var tmp0 = curr.g1k(true);
        var tmp2 = curr.w1h_1;
        var tmp0_0 = curr.x1h_1;
        // Inline function 'kotlin.math.min' call
        var b = tmp2 + convertToInt(byteCount) | 0;
        var tmp$ret$4 = Math.min(tmp0_0, b);
        result = commonToUtf8String(tmp0, tmp2, tmp$ret$4);
        _this__u8e3s4.o1i(byteCount);
        return result;
      }
      return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
    }
    // Inline function 'kotlin.error' call
    var message = 'Unreacheable';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    beginIndex = beginIndex === VOID ? 0 : beginIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
    if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
      throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'kotlinx.io.internal.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        var c = numberToChar(b0);
        var _unary__edvuaz = length;
        length = _unary__edvuaz + 1 | 0;
        chars[_unary__edvuaz] = c;
        index = index + 1 | 0;
        while (index < endIndex && _this__u8e3s4[index] >= 0) {
          var _unary__edvuaz_0 = index;
          index = _unary__edvuaz_0 + 1 | 0;
          var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
          var _unary__edvuaz_1 = length;
          length = _unary__edvuaz_1 + 1 | 0;
          chars[_unary__edvuaz_1] = c_0;
        }
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 5 === -2) {
          var tmp = index;
          var tmp2 = index;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
            if (endIndex <= (tmp2 + 1 | 0)) {
              var c_1 = numberToChar(65533);
              var _unary__edvuaz_2 = length;
              length = _unary__edvuaz_2 + 1 | 0;
              chars[_unary__edvuaz_2] = c_1;
              tmp$ret$4 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp2];
            var b1 = _this__u8e3s4[tmp2 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1 & 192) === 128)) {
              var c_2 = numberToChar(65533);
              var _unary__edvuaz_3 = length;
              length = _unary__edvuaz_3 + 1 | 0;
              chars[_unary__edvuaz_3] = c_2;
              tmp$ret$4 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              var c_3 = numberToChar(65533);
              var _unary__edvuaz_4 = length;
              length = _unary__edvuaz_4 + 1 | 0;
              chars[_unary__edvuaz_4] = c_3;
            } else {
              var c_4 = numberToChar(codePoint);
              var _unary__edvuaz_5 = length;
              length = _unary__edvuaz_5 + 1 | 0;
              chars[_unary__edvuaz_5] = c_4;
            }
            tmp$ret$4 = 2;
          }
          index = tmp + tmp$ret$4 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 4 === -2) {
            var tmp_0 = index;
            var tmp2_0 = index;
            var tmp$ret$16;
            $l$block_4: {
              // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
              if (endIndex <= (tmp2_0 + 2 | 0)) {
                var c_5 = numberToChar(65533);
                var _unary__edvuaz_6 = length;
                length = _unary__edvuaz_6 + 1 | 0;
                chars[_unary__edvuaz_6] = c_5;
                var tmp_1;
                if (endIndex <= (tmp2_0 + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
                }
                if (tmp_1) {
                  tmp$ret$16 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$16 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp2_0];
              var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_0 & 192) === 128)) {
                var c_6 = numberToChar(65533);
                var _unary__edvuaz_7 = length;
                length = _unary__edvuaz_7 + 1 | 0;
                chars[_unary__edvuaz_7] = c_6;
                tmp$ret$16 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2 & 192) === 128)) {
                var c_7 = numberToChar(65533);
                var _unary__edvuaz_8 = length;
                length = _unary__edvuaz_8 + 1 | 0;
                chars[_unary__edvuaz_8] = c_7;
                tmp$ret$16 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                var c_8 = numberToChar(65533);
                var _unary__edvuaz_9 = length;
                length = _unary__edvuaz_9 + 1 | 0;
                chars[_unary__edvuaz_9] = c_8;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                var c_9 = numberToChar(65533);
                var _unary__edvuaz_10 = length;
                length = _unary__edvuaz_10 + 1 | 0;
                chars[_unary__edvuaz_10] = c_9;
              } else {
                var c_10 = numberToChar(codePoint_0);
                var _unary__edvuaz_11 = length;
                length = _unary__edvuaz_11 + 1 | 0;
                chars[_unary__edvuaz_11] = c_10;
              }
              tmp$ret$16 = 3;
            }
            index = tmp_0 + tmp$ret$16 | 0;
          } else {
            // Inline function 'kotlinx.io.shr' call
            if (b0 >> 3 === -2) {
              var tmp_2 = index;
              var tmp2_1 = index;
              var tmp$ret$36;
              $l$block_10: {
                // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
                if (endIndex <= (tmp2_1 + 3 | 0)) {
                  if (!(65533 === 65533)) {
                    var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_12 = length;
                    length = _unary__edvuaz_12 + 1 | 0;
                    chars[_unary__edvuaz_12] = c_11;
                    var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_13 = length;
                    length = _unary__edvuaz_13 + 1 | 0;
                    chars[_unary__edvuaz_13] = c_12;
                  } else {
                    var c_13 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_14 = length;
                    length = _unary__edvuaz_14 + 1 | 0;
                    chars[_unary__edvuaz_14] = c_13;
                  }
                  var tmp_3;
                  if (endIndex <= (tmp2_1 + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_3) {
                    tmp$ret$36 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp2_1 + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                      // Inline function 'kotlinx.io.and' call
                      tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_4) {
                      tmp$ret$36 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$36 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp2_1];
                var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b1_1 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_15 = length;
                    length = _unary__edvuaz_15 + 1 | 0;
                    chars[_unary__edvuaz_15] = c_14;
                    var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_16 = length;
                    length = _unary__edvuaz_16 + 1 | 0;
                    chars[_unary__edvuaz_16] = c_15;
                  } else {
                    var c_16 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_17 = length;
                    length = _unary__edvuaz_17 + 1 | 0;
                    chars[_unary__edvuaz_17] = c_16;
                  }
                  tmp$ret$36 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b2_0 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_18 = length;
                    length = _unary__edvuaz_18 + 1 | 0;
                    chars[_unary__edvuaz_18] = c_17;
                    var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_19 = length;
                    length = _unary__edvuaz_19 + 1 | 0;
                    chars[_unary__edvuaz_19] = c_18;
                  } else {
                    var c_19 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_20 = length;
                    length = _unary__edvuaz_20 + 1 | 0;
                    chars[_unary__edvuaz_20] = c_19;
                  }
                  tmp$ret$36 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b3 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_21 = length;
                    length = _unary__edvuaz_21 + 1 | 0;
                    chars[_unary__edvuaz_21] = c_20;
                    var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_22 = length;
                    length = _unary__edvuaz_22 + 1 | 0;
                    chars[_unary__edvuaz_22] = c_21;
                  } else {
                    var c_22 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_23 = length;
                    length = _unary__edvuaz_23 + 1 | 0;
                    chars[_unary__edvuaz_23] = c_22;
                  }
                  tmp$ret$36 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  if (!(65533 === 65533)) {
                    var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_24 = length;
                    length = _unary__edvuaz_24 + 1 | 0;
                    chars[_unary__edvuaz_24] = c_23;
                    var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_25 = length;
                    length = _unary__edvuaz_25 + 1 | 0;
                    chars[_unary__edvuaz_25] = c_24;
                  } else {
                    var c_25 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_26 = length;
                    length = _unary__edvuaz_26 + 1 | 0;
                    chars[_unary__edvuaz_26] = c_25;
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  if (!(65533 === 65533)) {
                    var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_27 = length;
                    length = _unary__edvuaz_27 + 1 | 0;
                    chars[_unary__edvuaz_27] = c_26;
                    var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_28 = length;
                    length = _unary__edvuaz_28 + 1 | 0;
                    chars[_unary__edvuaz_28] = c_27;
                  } else {
                    var c_28 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_29 = length;
                    length = _unary__edvuaz_29 + 1 | 0;
                    chars[_unary__edvuaz_29] = c_28;
                  }
                } else if (codePoint_1 < 65536) {
                  if (!(65533 === 65533)) {
                    var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_30 = length;
                    length = _unary__edvuaz_30 + 1 | 0;
                    chars[_unary__edvuaz_30] = c_29;
                    var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_31 = length;
                    length = _unary__edvuaz_31 + 1 | 0;
                    chars[_unary__edvuaz_31] = c_30;
                  } else {
                    var c_31 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_32 = length;
                    length = _unary__edvuaz_32 + 1 | 0;
                    chars[_unary__edvuaz_32] = c_31;
                  }
                } else {
                  if (!(codePoint_1 === 65533)) {
                    var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_33 = length;
                    length = _unary__edvuaz_33 + 1 | 0;
                    chars[_unary__edvuaz_33] = c_32;
                    var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                    var _unary__edvuaz_34 = length;
                    length = _unary__edvuaz_34 + 1 | 0;
                    chars[_unary__edvuaz_34] = c_33;
                  } else {
                    var c_34 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_35 = length;
                    length = _unary__edvuaz_35 + 1 | 0;
                    chars[_unary__edvuaz_35] = c_34;
                  }
                }
                tmp$ret$36 = 4;
              }
              index = tmp_2 + tmp$ret$36 | 0;
            } else {
              var c_35 = _Char___init__impl__6a9atx(65533);
              var _unary__edvuaz_36 = length;
              length = _unary__edvuaz_36 + 1 | 0;
              chars[_unary__edvuaz_36] = c_35;
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString(chars, 0, length);
  }
  function get_SegmentReadContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentReadContextImpl;
  }
  var SegmentReadContextImpl;
  function get_SegmentWriteContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentWriteContextImpl;
  }
  var SegmentWriteContextImpl;
  var BufferIterationContextImpl;
  function UnsafeBufferOperations() {
  }
  var UnsafeBufferOperations_instance;
  function UnsafeBufferOperations_getInstance() {
    return UnsafeBufferOperations_instance;
  }
  function SegmentReadContextImpl$1() {
  }
  protoOf(SegmentReadContextImpl$1).o1j = function (segment, offset) {
    return segment.n1i(offset);
  };
  function SegmentWriteContextImpl$1() {
  }
  protoOf(SegmentWriteContextImpl$1).o1k = function (segment, offset, value) {
    segment.h1k(offset, value);
  };
  protoOf(SegmentWriteContextImpl$1).n1k = function (segment, offset, b0, b1) {
    segment.i1k(offset, b0, b1);
  };
  protoOf(SegmentWriteContextImpl$1).m1k = function (segment, offset, b0, b1, b2) {
    segment.j1k(offset, b0, b1, b2);
  };
  protoOf(SegmentWriteContextImpl$1).l1k = function (segment, offset, b0, b1, b2, b3) {
    segment.k1k(offset, b0, b1, b2, b3);
  };
  function BufferIterationContextImpl$1() {
  }
  protoOf(BufferIterationContextImpl$1).o1j = function (segment, offset) {
    return get_SegmentReadContextImpl().o1j(segment, offset);
  };
  var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
  function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
    if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
      properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
      SegmentReadContextImpl = new SegmentReadContextImpl$1();
      SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
      BufferIterationContextImpl = new BufferIterationContextImpl$1();
    }
  }
  function IOException_init_$Init$($this) {
    Exception_init_$Init$($this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$() {
    var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_0(message) {
    var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_0);
    return tmp;
  }
  function IOException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_1(message, cause) {
    var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_1);
    return tmp;
  }
  function IOException() {
    captureStack(this, IOException);
  }
  function EOFException_init_$Init$($this) {
    IOException_init_$Init$($this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$() {
    var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException_init_$Init$_0(message, $this) {
    IOException_init_$Init$_0(message, $this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$_0(message) {
    var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$_0);
    return tmp;
  }
  function EOFException() {
    captureStack(this, EOFException);
  }
  function SegmentPool() {
    this.x1i_1 = 0;
    this.y1i_1 = 0;
  }
  protoOf(SegmentPool).z1i = function () {
    return Companion_instance.c1k();
  };
  protoOf(SegmentPool).p1j = function (segment) {
  };
  protoOf(SegmentPool).e1k = function () {
    return AlwaysSharedCopyTracker_getInstance();
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: post-declaration
  protoOf(Buffer).d1j = write$default;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  UnsafeBufferOperations_instance = new UnsafeBufferOperations();
  SegmentPool_instance = new SegmentPool();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EOFException_init_$Create$_0;
  _.$_$.b = IOException_init_$Init$_0;
  _.$_$.c = IOException_init_$Create$_0;
  _.$_$.d = IOException_init_$Init$_1;
  _.$_$.e = IOException_init_$Create$_1;
  _.$_$.f = Buffer;
  _.$_$.g = IOException;
  _.$_$.h = Source;
  _.$_$.i = indexOf_1;
  _.$_$.j = readByteArray_0;
  _.$_$.k = readByteArray;
  _.$_$.l = readByteString;
  _.$_$.m = readString_1;
  _.$_$.n = readString;
  _.$_$.o = readString_0;
  _.$_$.p = writeString;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.js.map
